import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { jobPosting } = await request.json();

    if (!jobPosting || jobPosting.trim().length < 50) {
      return new Response(
        JSON.stringify({
          message: 'Job posting is too short or empty. Please provide a complete job description.',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const anthropic = new Anthropic({
      apiKey: import.meta.env.ANTHROPIC_API_KEY,
    });

    try {
      const response = await anthropic.messages.create({
        messages: [
          {
            role: 'user',
            content: `Analyze if this is a real job posting. Only respond with "VALID" or "INVALID" followed by a brief reason why:\n\n${jobPosting}`,
          },
        ],
        model: 'claude-3-5-sonnet-20240620',
        max_tokens: 150,
        system: 'You are a job posting validator. Analyze if the text appears to be a genuine job posting. Look for key elements like job title, responsibilities, requirements, and company information.',
      });

      const result = response.content
        .filter((content) => content.type === 'text')
        .map((content) => content.text)
        .join('');
      const isValid = result.startsWith('VALID');

      if (!isValid) {
        return new Response(
          JSON.stringify({
            message: result.replace('INVALID:', '').trim() || 'The provided text does not appear to be a valid job posting.',
          }),
          {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (aiError) {
      console.error('AI Service Error:', aiError);
      return new Response(
        JSON.stringify({
          message: 'Unable to process job posting. AI service error.',
          details: formatErrorMessage(aiError),
        }),
        {
          status: 503,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({
        message: 'Failed to validate job description',
        details: formatErrorMessage(error),
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

const formatErrorMessage = (error: Error | string | unknown): string => {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  return 'Unknown error occurred';
}; 
