export { renderers } from '../../renderers.mjs';

const SECRET_KEY = "0x4AAAAAAA1jHIcvKPM871c7S9d8_sR5yEc";
const CONTACT_INFO = {
  email: "ryanroga@gmail.com",
  linkedin: "https://linkedin.com/in/ryanroga",
  github: "https://github.com/rogadev"
};
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const token = data.token;
    const result = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          secret: SECRET_KEY,
          response: token
        })
      }
    );
    const outcome = await result.json();
    if (outcome.success) {
      return new Response(JSON.stringify({
        success: true,
        data: CONTACT_INFO
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    return new Response(JSON.stringify({
      success: false,
      error: "Validation failed"
    }), { status: 400 });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: "Server error"
    }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
