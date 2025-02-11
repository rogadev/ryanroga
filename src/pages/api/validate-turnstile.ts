import type { APIRoute } from 'astro';

const SECRET_KEY = import.meta.env.TURNSTILE_SECRET_KEY;

const CONTACT_INFO = {
  email: 'ryanroga@gmail.com',
  linkedin: 'https://linkedin.com/in/ryanroga',
  github: 'https://github.com/rogadev'
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const { token } = await request.json();

    // Validate token with Turnstile
    const result = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: SECRET_KEY,
          response: token,
        }),
      }
    );

    const outcome = await result.json();

    if (outcome.success) {
      // Return contact info only if validation successful
      return new Response(JSON.stringify({
        success: true,
        data: CONTACT_INFO
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return new Response(JSON.stringify({
      success: false,
      error: 'Validation failed'
    }), { status: 400 });

  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Server error'
    }), { status: 500 });
  }
}; 
