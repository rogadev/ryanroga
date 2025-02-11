import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { simplifiedDescription } = await request.json();
    const anthropic = new Anthropic({
      apiKey: import.meta.env.ANTHROPIC_API_KEY,
    });

    const systemPrompt = `You are a job compatibility checker. Check if the job requirements align with Ryan's current technical focus and expertise.

Technology Preferences:
Ryan prefers not to work with the following technologies due to either focusing on different tech stacks or having limited experience with them:
- PHP (focusing on TypeScript/JavaScript ecosystem instead)
- Laravel (specializing in Node.js based frameworks)
- React Native (specializing in web technologies)
- Dart (concentrating on JavaScript/TypeScript development)
- Java (specializing in Node.js backend development)
- WordPress (preferring modern frameworks and custom solutions)

Location Requirements:
- Fully remote positions are acceptable regardless of company location
- For positions requiring any in-office work (hybrid or full-time):
  * Must be located in Greater Victoria Region (BC, Canada) OR
  * Must be located in Nanaimo, BC, Canada

Response Rules:
1. Only check for conflicts with the specific technologies listed above
2. Only check location requirements if in-office work is required
3. Keep responses brief and focused
4. Don't mention technologies that aren't on the conflict list
5. Don't suggest alternatives or explain transferable skills
6. Respond with either "COMPATIBLE" or a conflict message

Example conflict responses:
For technology mismatch:
"CONFLICT: Thank you for considering my profile. While I appreciate the opportunity, I specialize in Node.js and TypeScript-based development. As this role requires Java development, I'll respectfully decline at this time."

For location mismatch:
"CONFLICT: Thank you for considering my profile. As this position requires in-office presence in Toronto, and I'm only available for in-person work in the Greater Victoria Region or Nanaimo, BC, I'll respectfully decline at this time."`;

    const response = await anthropic.messages.create({
      messages: [{ role: 'user', content: simplifiedDescription }],
      model: 'claude-3-5-sonnet-20240620',
      max_tokens: 250,
      system: systemPrompt,
    });

    const result = response.content
      .filter((content) => content.type === 'text')
      .map((content) => content.text)
      .join('');
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
        message: 'Failed to check for compatibility',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}; 
