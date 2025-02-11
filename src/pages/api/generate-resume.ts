import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';

// Helper function for delay
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const MAX_TOKENS = 8000 as const;

interface AnthropicError {
  error?: {
    type?: string;
  };
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Verify the request is coming from your website
    const referer = request.headers.get('referer');
    const url = new URL(request.url);
    if (!referer || !new URL(referer).origin.includes(url.origin)) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const { jobPosting } = await request.json();

    // Initialize the Anthropic client
    const anthropic = new Anthropic({
      apiKey: import.meta.env.ANTHROPIC_API_KEY
    });

    const systemPrompt = `You are a professional resume and cover letter writer. Generate a tailored resume and cover letter based on the provided job posting.

Output Rules:
- Output ONLY the resume and cover letter in markdown format
- Never include any preamble, analysis, or additional commentary
- Do not explain your process or decisions
- Start directly with the resume content followed by the cover letter

Personal Information:
- Name: Ryan Roga
- Email: ryanroga@gmail.com
- Phone: 902-830-8881
- Current Location: Dartmouth, Nova Scotia
- Relocation: Moving to Victoria, BC (March 2025)

Location Requirements:
- Only consider positions that are either fully remote or in-person/hybrid within Greater Victoria Region
- For non-compliant locations, focus on remote work capabilities and provide remote work references

Technical Expertise:
Frontend: Vue.js/Nuxt.js, Svelte/SvelteKit, React, Astro, TypeScript, TailwindCSS
Backend: Node.js, Deno, Hono, Prisma, Supabase
Currently Learning: Python, .NET, Machine Learning

Soft Skills & Professional Strengths:
- Communication: Skilled at explaining technical concepts to non-technical stakeholders, articulating ideas, challenges, and solutions clearly
- Problem-solving: Expert at breaking down complex issues, systematic debugging, and finding creative solutions
- Time Management: Strong track record of accurate project estimation, task prioritization, and deadline management
- Adaptability: Embraces rapid technology evolution, demonstrates quick learning capabilities
- Teamwork: Proven collaboration with cross-functional teams, writes maintainable and well-documented code
- Attention to Detail: Ensures code quality, UI consistency, and adherence to standards
- Empathy: Focus on user needs, accessibility, and optimal user experience
- Critical Thinking: Makes informed technical decisions, evaluates tradeoffs effectively
- Project Management: Experienced in task breakdown, progress tracking, and team coordination
- Patience: Maintains composure with challenging technical issues and stakeholder communication

Notable Projects:

1. CarEvo Logistics Web Application (Client: CarEvo)
- Comprehensive logistics management system for premier online used car dealership
- Vehicle tracking, service management, vendor portal integration
- Tech: Nuxt.js, Vue.js, TypeScript, TailwindCSS, Prisma, Supabase

2. VIU Career Outlooks (Client: Vancouver Island University)
- Educational tool connecting VIU programs with employment opportunities
- Data scraping, dynamic career pathway visualization
- Tech: TypeScript, Svelte, Node.js, Prisma, Tailwind CSS, Fuse.js

3. Granny Go Go Trip Tracker
- Medical transportation management system
- AI-powered route optimization, GPT-3.5-Turbo schedule generation
- Tech: Vue.js, Nuxt.js, TypeScript, Tailwind CSS, Prisma, Supabase, OpenAI API, Google Maps API

Key Strengths:
- AI Integration: Early GPT-3 adopter, custom implementations, continuous exploration
- Problem-Solving: Workflow-based approach, incremental improvements, code optimization
- UI/UX: Frictionless experiences, creative data visualization, intuitive design

Resume/Cover Letter Generation Process:
1. Verify location requirements first
2. Match technical requirements with existing skills
3. Highlight relevant projects
4. Emphasize learning capacity for missing technologies
5. Showcase problem-solving and UI/UX philosophy
6. Include AI integration experience where relevant

Professional Experience Timeline:
- Full Stack Developer (2022-Present)
  * Freelance Web Developer (2023-Present)
    - Various client projects including educational tools for VIU
  * Principal Developer at CarEvo (2023-2024)
    - Led development of comprehensive logistics management system
  * Web Developer Intern at VIU (Summer 2022)
    - Developed Career Outlooks web application
  * Capstone Project: Granny Go Go (2023)
    - Paid client project developed as part of diploma program

Education:
Web and Mobile Application Development Diploma
Vancouver Island University (2022-2024)
- Graduated top of class
- Relevant coursework in full-stack development, AI integration, and software architecture

Please analyze the job posting provided and ONLY IF it passes validation:
1. A tailored resume that highlights Ryan's most relevant experience and skills for this specific role, formatted in markdown
2. A compelling cover letter that connects Ryan's experience to the job requirements, formatted in markdown`;

    // Create a ReadableStream that will handle retries
    return new Response(
      new ReadableStream({
        async start(controller) {
          let attempts = 0;
          const maxAttempts = 3;
          const baseDelay = 1000; // 1 second

          while (attempts < maxAttempts) {
            try {
              const stream = await anthropic.messages.create({
                max_tokens: MAX_TOKENS,
                messages: [
                  {
                    role: 'user',
                    content: `Please create a tailored resume and cover letter for this job posting:\n\n${jobPosting}`
                  }
                ],
                model: 'claude-3-5-sonnet-20240620',
                stream: true,
                system: systemPrompt
              });

              // Process the stream
              for await (const chunk of stream) {
                if (chunk.type === 'content_block_delta' && 'text' in chunk.delta) {
                  controller.enqueue(new TextEncoder().encode(chunk.delta.text));
                }
              }

              // If we get here, streaming completed successfully
              controller.close();
              return;

            } catch (error) {
              attempts++;
              console.error(`Attempt ${attempts} failed:`, error);

              // If it's the last attempt, propagate the error
              if (attempts === maxAttempts) {
                if (typeof error === 'object' && error !== null) {
                  const anthropicError = error as AnthropicError;
                  if (anthropicError.error?.type === 'overloaded_error') {
                    const errorResponse = {
                      error: {
                        type: 'overloaded_error',
                        message: 'Claude AI is currently overloaded.'
                      }
                    };
                    return new Response(JSON.stringify(errorResponse), {
                      status: 503,
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    });
                  } else {
                    const errorMessage = '\n\nError: Failed to complete the generation. Please try again.';
                    controller.enqueue(new TextEncoder().encode(errorMessage));
                    controller.close();
                    return;
                  }
                }
              }

              // If it's an overloaded error, wait before retrying
              if (typeof error === 'object' && error !== null) {
                const anthropicError = error as AnthropicError;
                if (anthropicError.error?.type === 'overloaded_error') {
                  const delay = baseDelay * Math.pow(2, attempts - 1);
                  controller.enqueue(new TextEncoder().encode(`\n\nService busy, retrying in ${delay / 1000} seconds...\n`));
                  await sleep(delay);
                }
              }
            }
          }
        },

        cancel() {
          // Handle stream cancellation
          console.log('Stream cancelled by client');
        }
      }),
      {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Transfer-Encoding': 'chunked'
        }
      }
    );

  } catch (error: unknown) {
    console.error('API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({
        error: 'Failed to generate resume',
        details: errorMessage
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}; 
