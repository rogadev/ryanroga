import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { jobPosting } = await request.json();
    const anthropic = new Anthropic({
      apiKey: import.meta.env.ANTHROPIC_API_KEY,
    });

    const response = await anthropic.messages.create({
      messages: [
        {
          role: 'user',
          content: `Extract and summarize the key technical requirements, experience needed, and job requirements from this posting:\n\n${jobPosting}`,
        },
      ],
      model: 'claude-3-5-sonnet-20240620',
      max_tokens: 500,
      system: 'You are a technical recruiter. Extract and summarize key job requirements focusing on: required technologies, years of experience, location requirements, and key responsibilities. Format the response in a clear, concise manner.',
    });

    return new Response(
      JSON.stringify({
        simplifiedDescription: response.content[0].text,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Failed to analyze job requirements',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}; 
