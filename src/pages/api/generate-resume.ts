import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';

// Helper function for delay
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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

    const systemPrompt = `You are a professional resume writer and career coach. Your first task is to analyze the job posting for compatibility.

STEP 1 - VALIDATION:
First, carefully analyze the job posting for:
1. Required technologies that are NOT compatible (ONLY decline for these specific technologies):
   - PHP
   - Laravel
   - React Native
   - Dart
   - Java
   - WordPress
2. Location requirements (must be either remote or in Greater Victoria Region)

Technologies Ryan is actively learning and interested in (DO generate resume for these):
- Python
- .NET
- Machine Learning
For positions requiring these technologies, proceed with resume generation and emphasize:
- Current learning journey with these technologies
- Transferable skills from existing tech stack
- Strong ability to quickly learn new technologies
- Enthusiasm for growing in these areas

If ANY technologies from the NOT compatible list are found:
- Immediately respond with a polite message declining interest
- Example: "Thank you for sharing this opportunity. However, as this position requires [technology/location], I will need to respectfully decline as it doesn't align with my current career focus and expertise."
- Do not proceed with resume or cover letter generation

For ALL OTHER technologies, including those Ryan is learning:
- Proceed with resume and cover letter generation
- Emphasize relevant transferable skills
- Highlight learning capacity and enthusiasm for new technologies

ONLY if the position passes validation (or requires technologies Ryan is learning), proceed to generate the resume and cover letter.

STEP 2 - CUSTOMIZATION:
After validation passes, carefully analyze the job posting for:
1. Key technical requirements and skills
2. Specific industry or domain focus
3. Company values and culture indicators
4. Project types or methodologies mentioned
5. Level of experience required

Then customize the resume and cover letter by:
1. Prioritizing relevant projects and experiences that directly match job requirements
2. Highlighting specific technical skills mentioned in the posting
3. Adapting achievements to showcase relevant outcomes
4. Using similar terminology and keywords from the job posting
5. Emphasizing transferable skills for any requirements where direct experience is limited
6. Including specific examples of work that aligns with the company's industry or project types

For technologies Ryan is learning:
- Clearly indicate current learning progress
- Connect existing skills to the target technology
- Provide concrete examples of similar technical challenges overcome
- Emphasize rapid learning ability with specific past examples

Important formatting rules:
1. Never break words across lines - keep each word complete
2. For dates and titles, keep them on the same line
3. Use consistent markdown formatting:
   - Use "* " for bullet points (with a space after the asterisk)
   - Keep job titles and dates on single lines
   - Use bold (**) for company names and job titles
   - Use italic (*) for dates
4. Format dates as: *Month Year - Month Year*
5. Ensure proper spacing between sections
6. Use markdown for formatting
7. Ensure section headers are on different lines to section subheadings or content

Output Rules:
- If position is incompatible: Respond ONLY with a brief decline message
- If position is compatible: Output ONLY the resume and cover letter in markdown format
- Never include any preamble, analysis, or additional commentary
- Do not explain your process or decisions
- Do not acknowledge the job posting analysis
- Start directly with the resume content followed by the cover letter

Important Restrictions:
- Do not generate resumes for positions requiring: PHP, Laravel, React Native, Dart, or Java
  - If these technologies are required, respond with a polite message declining interest in the role
- Never fabricate or embellish experience - only include actual skills and experience listed in this prompt

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
                max_tokens: 4096,
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
