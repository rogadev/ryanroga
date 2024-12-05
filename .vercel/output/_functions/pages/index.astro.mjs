/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, e as renderSlot, f as createAstro, m as maybeRenderHead, g as renderComponent } from '../chunks/astro/server_BeH3Xcyf.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)"><meta name="description" content="Ryan Roga - Full Stack Web Developer specializing in TypeScript, Vue.js, and modern web technologies"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Open Graph / Social Media Meta Tags --><meta property="og:title" content="Ryan Roga - Full Stack Web Developer"><meta property="og:description" content="Portfolio of Ryan Roga - Full Stack Web Developer specializing in TypeScript, Vue.js, and modern web technologies"><meta property="og:type" content="website"><meta property="og:image" content="/og-image.jpg"><meta property="og:url" content="https://ryanroga.com"><title>Ryan Roga | Full Stack Web Developer</title>${renderHead()}</head> <body class="min-h-screen bg-white dark:bg-gray-900 antialiased"> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:p-4">
Skip to main content
</a> <main id="main-content"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/ryanr/Documents/dev/ryanroga/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm" role="banner" data-astro-cid-pux6a34n> <nav class="container mx-auto px-4" aria-label="Main navigation" data-astro-cid-pux6a34n> <div class="flex items-center justify-between h-16" data-astro-cid-pux6a34n> <!-- Logo/Name --> <a href="#home" class="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400" data-astro-cid-pux6a34n>
Ryan Roga
</a> <!-- Desktop Navigation --> <div class="hidden md:flex items-center space-x-8" role="navigation" data-astro-cid-pux6a34n> ${navigation.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"${addAttribute(currentPath === item.href ? "page" : void 0, "aria-current")} data-astro-cid-pux6a34n> ${item.name} </a>`)} <!-- Resume Button --> <a href="#resume" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" data-astro-cid-pux6a34n>
Resume
</a> </div> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="md:hidden text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu" data-astro-cid-pux6a34n> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-pux6a34n> <path class="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-pux6a34n></path> <path class="close-icon hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-pux6a34n></path> </svg> </button> </div> <!-- Mobile Navigation --> <div id="mobile-menu" class="md:hidden hidden pb-4" role="navigation" aria-label="Mobile navigation" data-astro-cid-pux6a34n> <div class="flex flex-col space-y-4" data-astro-cid-pux6a34n> ${navigation.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-pux6a34n> ${item.name} </a>`)} <a href="#resume" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center" data-astro-cid-pux6a34n>
Resume
</a> </div> </div> </nav> </header>  `;
}, "C:/Users/ryanr/Documents/dev/ryanroga/src/components/Navigation.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="home" aria-label="Introduction" class="min-h-screen flex items-center justify-center relative overflow-hidden"> <div class="container mx-auto px-4 py-32 relative z-10"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
Ryan Roga
<span class="block text-3xl md:text-4xl text-blue-600 dark:text-blue-400 mt-2">
Full Stack Web Developer
</span> </h1> <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
Crafting innovative web solutions with TypeScript, Vue.js, and modern
        technologies
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="#projects" class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-300" role="button">
View My Work
</a> <a href="#contact" class="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-300" role="button">
Get in Touch
</a> </div> </div> </div> <div aria-hidden="true" class="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"></div> </section>`;
}, "C:/Users/ryanr/Documents/dev/ryanroga/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const skills = {
    languages: ["TypeScript", "JavaScript", "HTML"],
    frameworks: ["Vue.js", "Nuxt.js", "Svelte", "Astro", "Node.js", "Express"],
    tools: [
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "OpenAI API",
      "Git",
      "PostgreSQL"
    ],
    additional: ["React", "Next.js", "AWS", "Docker", "Python", "MongoDB"]
  };
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-20 bg-white dark:bg-gray-900" aria-labelledby="about-heading"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <h2 id="about-heading" class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
About Me
</h2> <div class="mb-8 sm:mb-12 text-base sm:text-lg text-gray-600 dark:text-gray-300 space-y-4 sm:space-y-6"> <p>
🌐 I am a web developer specializing in full-stack web application
          development, with a proven track record of delivering complex business
          solutions. My collaborative approach has helped diverse clients
          transform their requirements into functional, scalable applications.
</p> <p>
🚀 My expertise spans business operations, logistics management, task
          automation, and AI integration. I prioritize user-centered design
          principles, creating streamlined interfaces backed by robust
          architectures that deliver exceptional performance.
</p> <p>
🔍 Currently seeking a full-time position within a collaborative team
          where I can leverage my skills and drive innovation. I'm passionate
          about continuous learning and ready to tackle challenging projects
          that make a real impact.
</p> </div> <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">  <div class="space-y-4"> <h3 id="languages-heading" class="text-xl font-semibold text-blue-600 dark:text-blue-400">
Languages
</h3> <ul class="space-y-2" aria-labelledby="languages-heading"> ${skills.languages.map((skill) => renderTemplate`<li class="flex items-center text-gray-700 dark:text-gray-300"> <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>${skill}</span> </li>`)} </ul> </div> <div class="space-y-4"> <h3 class="text-xl font-semibold text-blue-600 dark:text-blue-400">
Frameworks
</h3> <ul class="space-y-2"> ${skills.frameworks.map((skill) => renderTemplate`<li class="flex items-center text-gray-700 dark:text-gray-300"> <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>${skill}</span> </li>`)} </ul> </div> <div class="space-y-4"> <h3 class="text-xl font-semibold text-blue-600 dark:text-blue-400">
Tools
</h3> <ul class="space-y-2"> ${skills.tools.map((skill) => renderTemplate`<li class="flex items-center text-gray-700 dark:text-gray-300"> <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>${skill}</span> </li>`)} </ul> </div> <div class="space-y-4"> <h3 class="text-xl font-semibold text-blue-600 dark:text-blue-400">
Additional
</h3> <ul class="space-y-2"> ${skills.additional.map((skill) => renderTemplate`<li class="flex items-center text-gray-700 dark:text-gray-300"> <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>${skill}</span> </li>`)} </ul> </div> </div> </div> </div> </section>`;
}, "C:/Users/ryanr/Documents/dev/ryanroga/src/components/About.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "CarEvo Logistics Web Application",
      description: "A comprehensive logistics management system for Carevo, a premier online used car dealership. Features vehicle tracking, service management, and vendor portal integration.",
      technologies: [
        "Nuxt.js",
        "Vue.js",
        "TypeScript",
        "TailwindCSS",
        "Prisma",
        "Supabase"
      ],
      links: {
        client: "https://carevo.ca/?utm_source=ryanroga&utm_medium=portfolio&utm_campaign=featured_projects"
      }
    },
    {
      title: "VIU Career Outlooks",
      description: "An innovative tool connecting VIU programs with real-world employment opportunities, featuring data scraping and dynamic career pathway visualization.",
      technologies: [
        "TypeScript",
        "Svelte",
        "Node.js",
        "Prisma",
        "Tailwind CSS",
        "Fuse.js"
      ],
      links: {
        client: "https://viu.ca/?utm_source=ryanroga&utm_medium=portfolio&utm_campaign=featured_projects",
        repo: "https://github.com/rogadev/viu-career-outlooks"
      }
    },
    {
      title: "Granny Go Go Trip Tracker",
      description: "A medical transportation management system with AI-powered route optimization and schedule generation using OpenAI's GPT-3.5-Turbo.",
      technologies: [
        "Vue.js",
        "Nuxt.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "Supabase",
        "OpenAI API",
        "Google Maps API"
      ],
      links: {
        client: "https://www.grannygogo.ca/?utm_source=ryanroga&utm_medium=portfolio&utm_campaign=featured_projects",
        repo: "https://github.com/rogadev/capstone"
      }
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="projects" class="py-20 bg-gray-50 dark:bg-gray-800" aria-labelledby="projects-heading"> <div class="container mx-auto px-4"> <h2 id="projects-heading" class="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
Featured Projects
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${projects.map((project, index) => renderTemplate`<article class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 flex flex-col h-full"${addAttribute(`project-${index}`, "aria-labelledby")}> ${project.image && renderTemplate`<img${addAttribute(project.image, "src")}${addAttribute(`Screenshot of ${project.title}`, "alt")} class="w-full h-48 object-cover">`} <div class="p-6 flex flex-col flex-grow"> <div class="flex-grow"> <h3${addAttribute(`project-${index}`, "id")} class="text-2xl font-bold text-gray-900 dark:text-white mb-3"> ${project.title} </h3> <p class="text-gray-600 dark:text-gray-300"> ${project.description} </p> </div> <div class="mt-4"> <div class="flex flex-wrap gap-2 mb-4"> ${project.technologies.map((tech) => renderTemplate`<span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm whitespace-nowrap"> ${tech} </span>`)} </div> <div class="flex flex-wrap gap-3"> ${project.links.live && renderTemplate`<a${addAttribute(project.links.live, "href")} class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer"${addAttribute(`View live demo of ${project.title}`, "aria-label")}>
Live Demo →
</a>`} ${project.links.client && renderTemplate`<a${addAttribute(project.links.client, "href")} class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300" target="_blank"${addAttribute(`View client project of ${project.title}`, "aria-label")}>
Client →
</a>`} ${project.links.repo && renderTemplate`<a${addAttribute(project.links.repo, "href")} class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer"${addAttribute(`View GitHub repository of ${project.title}`, "aria-label")}>
GitHub →
</a>`} </div> </div> </div> </article>`)} </div> <div class="text-center mt-12"> <a href="https://github.com/rogadev" class="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
View More on GitHub
</a> </div> </div> </section>`;
}, "C:/Users/ryanr/Documents/dev/ryanroga/src/components/Projects.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const contactInfo = {
    name: "Ryan Roga"
  };
  return renderTemplate(_a || (_a = __template(["", `<section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800"> <div class="container mx-auto px-4"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
Get in Touch
</h2> <p class="text-xl text-gray-600 dark:text-gray-300">
Interested in working together? Let's connect through my contact
          information below!
</p> </div> <div class="max-w-md mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8"> <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
Contact Information
</h3> <!-- Hide contact info initially --> <div id="contact-info" class="space-y-4 hidden"> <div class="flex items-center justify-center"> <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <a`, ' class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" aria-label="Send email"> ', ' </a> </div> <div class="flex items-center justify-center"> <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 9h4v12H2z"></path> <circle cx="4" cy="4" r="2" stroke-width="2"></circle> </svg> <a', ' target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" aria-label="LinkedIn profile">\nLinkedIn <span id="linkedin-username"></span> </a> </div> <div class="flex items-center justify-center"> <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path> </svg> <a', ' target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" aria-label="GitHub profile">\nGitHub <span id="github-username"></span> </a> </div> </div> <!-- Add CAPTCHA container --> <div id="captcha-container" class="mt-6 flex justify-center"> <div id="turnstile-container"></div> </div> <!-- Show this message before verification --> <div id="pre-verification-message" class="text-gray-600 dark:text-gray-300 text-center">\nPlease complete the verification to view contact information.\n</div> </div> </div> </div> </section>  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback" defer><\/script>'])), maybeRenderHead(), addAttribute(`mailto:${contactInfo.email}`, "href"), contactInfo.email, addAttribute(contactInfo.linkedin, "href"), addAttribute(contactInfo.github, "href"));
}, "C:/Users/ryanr/Documents/dev/ryanroga/src/components/Contact.astro", void 0);

const $$ResumeSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="resume" class="py-20 bg-gray-50 dark:bg-gray-900"> <div class="container mx-auto px-4"> <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
Interactive Resume Experience
</h2> <!-- Initial Options --> <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"> <a href="/RyanRoga_Resume.pdf" target="_blank" rel="noopener noreferrer" class="block"> <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"> <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
Traditional Resume
</h3> <p class="text-gray-600 dark:text-gray-300">
View my standard resume in a traditional format, highlighting my
            experience, skills, and achievements.
</p> </div> </a> <button id="aiResumeBtn" class="block text-left cursor-default"> <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow relative"> <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
AI-Tailored Resume
</h3> <p class="text-gray-600 dark:text-gray-300">
Upload a job posting to receive a customized resume that highlights
            my most relevant experience for the role.
</p> <span class="absolute top-0 right-0 mt-2 mr-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
Coming Soon
</span> </div> </button> </div> <!-- AI Resume Generator Section (Hidden by default) --> <!--
    <div id='aiResumeSection' class='hidden max-w-4xl mx-auto'>
      <div class='bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8'>
        <h3 class='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>
          Generate Tailored Resume
        </h3>
        <form id='jobPostingForm' class='space-y-6'>
          <div>
            <label
              for='jobPosting'
              class='block text-gray-700 dark:text-gray-300 mb-2'
            >
              Job Posting Description
            </label>
            <textarea
              id='jobPosting'
              name='jobPosting'
              rows='6'
              class='w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors'
              placeholder='Paste the job posting here...'
              required></textarea>
          </div>
          <button
            type='submit'
            class='w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300'
          >
            Generate Resume
          </button>
        </form>
      </div>
  --> <!-- Generated Resume Display --><!--
    <div
      id='generatedResume'
      class='hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8'
    >
      --><!-- Content will be populated by JavaScript --><!--
    </div>
  </div>
  --> <!-- AI Chat Section --> <!-- <div class='max-w-4xl mx-auto mt-12'>
      <AIChatHistory />
    </div> --> </div>  </section>`;
}, "C:/Users/ryanr/Documents/dev/ryanroga/src/components/ResumeSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative"> ${renderComponent($$result2, "Navigation", $$Navigation, {})} <main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "ResumeSection", $$ResumeSection, {})} </main> </div> ` })}`;
}, "C:/Users/ryanr/Documents/dev/ryanroga/src/pages/index.astro", void 0);

const $$file = "C:/Users/ryanr/Documents/dev/ryanroga/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
