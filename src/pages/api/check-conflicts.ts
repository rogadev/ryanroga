import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { simplifiedDescription } = await request.json();
    const anthropic = new Anthropic({
      apiKey: import.meta.env.ANTHROPIC_API_KEY,
    });

    const systemPrompt = `You are a job compatibility checker. Check if the job requirements conflict with these restrictions:

Forbidden Technologies:
- PHP
- Laravel
- React Native
- Dart
- Java
- WordPress

Location Requirements:
- Must be either fully remote OR
- Must be located in Greater Victoria Region (BC, Canada) OR
- Must be located in Nanaimo, BC, Canada

If there are conflicts, respond with "CONFLICT:" followed by a polite decline message.
If there are no conflicts, respond with "COMPATIBLE".`;

    const response = await anthropic.messages.create({
      messages: [
        {
          role: 'user',
          content: `Check this job description for conflicts:\n\n${simplifiedDescription}`,
        },
      ],
      model: 'claude-3-5-sonnet-20240620',
      max_tokens: 250,
      system: systemPrompt,
    });

    const result = response.content[0].text;
    const isCompatible = result.startsWith('COMPATIBLE');

    if (!isCompatible) {
      return new Response(
        JSON.stringify({
          message: result.replace('CONFLICT:', '').trim(),
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
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Failed to check for conflicts',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}; 
