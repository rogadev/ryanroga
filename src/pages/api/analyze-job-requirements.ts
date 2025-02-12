import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { jobPosting } = await request.json();
    const anthropic = new Anthropic({
      apiKey: import.meta.env.ANTHROPIC_API_KEY,
    });

    const response = await anthropic.messages.create({
      messages: [{ role: 'user', content: jobPosting }],
      model: 'claude-3-5-sonnet-20240620',
      max_tokens: 500,
      temperature: 0.7
    });

    return new Response(JSON.stringify({
      simplifiedDescription: response.content
        .reduce((acc, block) => {
          if (block.type === 'text') {
            return acc + block.text;
          }
          return acc;
        }, '')
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Job analysis error:', error);
    return new Response(
      JSON.stringify({
        message: 'Failed to analyze job requirements',
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}; 
