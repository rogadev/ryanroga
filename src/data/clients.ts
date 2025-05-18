import type { ClientRecord } from '../types/client';

// Client data with detailed project information
export const clients: ClientRecord = {
  'carevo': {
    name: 'CarEvo',
    description: 'Premier online used car dealership in Eastern Canada specializing in streamlined vehicle purchasing experiences.',
    industry: 'Automotive',
    logo: '/logos/client-logos/carevo.png',
    slug: 'carevo',
    years: [2023, 2024],
    technologies: [
      'Nuxt.js',
      'Vue.js',
      'TypeScript',
      'TailwindCSS',
      'Prisma',
      'Supabase',
    ],
    companySize: '50-100 employees',
    website: 'https://carevo.ca/',
    projectTitle: 'Logistics Web Application',
    projectDescription: 'The Carevo Auto Solutions Web Application optimizes the logistics and management of used vehicles for Carevo, a premier online used car dealership in Eastern Canada. This comprehensive tool enhances operational efficiency by facilitating vehicle handling across multiple lots, tracking services, and providing timely updates for both logistics and sales teams.',
    projectChallenges: [
      'Managing vehicles across multiple dealership lots',
      'Tracking service work and maintenance status',
      'Providing real-time updates to both logistics and sales teams',
      'Integrating with existing dealer management systems',
      'Ensuring mobile responsiveness for field staff'
    ],
    projectSolution: 'Developed a full-stack logistics management platform using Nuxt 3, Vue 3, and TypeScript with Tailwind CSS for the frontend. Implemented Prisma with Supabase for robust database operations and real-time synchronization. Created a vendor portal for service providers, integrated QR code functionality for quick vehicle identification, and designed a mobile-first interface for field staff.',
    projectOutcome: 'The implementation resulted in a 35% reduction in vehicle processing time, significantly improved inter-departmental communication, and enabled real-time tracking of vehicle status across all stages of processing. The platform continues to evolve with additional features being added based on user feedback and changing business requirements.',
    screenshots: [
      '/images/screenshots/carevo-dashboard.jpg',
      '/images/screenshots/carevo-vehicle-detail.jpg',
      '/images/screenshots/carevo-mobile.jpg'
    ]
  },
  'viu': {
    name: 'Vancouver Island University',
    description: 'Leading post-secondary institution committed to providing accessible education and innovative learning solutions.',
    industry: 'Education',
    logo: '/logos/client-logos/viu logo.jpg',
    slug: 'viu',
    years: [2022, 2023],
    technologies: [
      'TypeScript',
      'Svelte',
      'Node.js',
      'Prisma',
      'Tailwind CSS',
      'Fuse.js',
    ],
    companySize: '1,000+ employees',
    website: 'https://viu.ca/',
    projectTitle: 'Career Outlooks Web Application',
    projectDescription: 'The VIU Career Outlooks Web Application represents a pivotal collaboration with Vancouver Island University, aimed at aiding prospective students in making informed decisions regarding their educational and professional paths. This innovative tool seamlessly connects VIU programs and credentials with real-world employment opportunities.',
    projectChallenges: [
      'Aggregating diverse career data from multiple government sources',
      'Creating an intuitive interface for students with varying technical abilities',
      'Designing a system that accurately maps educational programs to career paths',
      'Implementing effective data visualization for complex employment statistics',
      'Ensuring accessibility compliance for all users'
    ],
    projectSolution: 'Developed a comprehensive web application using Svelte for the frontend with TypeScript and Tailwind CSS. Created a Node.js backend with Prisma for database management. Implemented custom data scrapers to collect and normalize employment data from government sources. Designed an intuitive search system using Fuse.js to help students find relevant programs and careers based on their interests and goals.',
    projectOutcome: 'The application is now live on VIU\'s website, providing students with valuable insights into potential career pathways based on their chosen programs. It has become an essential tool for academic advisors and has received positive feedback from both students and faculty for its ease of use and comprehensive information.',
    screenshots: [
      '/images/screenshots/viu-search.jpg',
      '/images/screenshots/viu-program-detail.jpg',
      '/images/screenshots/viu-career-outlook.jpg'
    ]
  },
  'granny-go-go': {
    name: 'Granny Go Go',
    description: 'Specialized medical transportation service ensuring safe and comfortable transit for elderly and disabled individuals.',
    industry: 'Healthcare Transportation',
    logo: '/logos/client-logos/granny-go-go.png',
    slug: 'granny-go-go',
    years: [2023],
    technologies: [
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'OpenAI API',
      'Google Maps API',
    ],
    companySize: '10-20 employees',
    website: 'https://www.grannygogo.ca/',
    projectTitle: 'Trip Tracker System',
    projectDescription: 'The Granny Go Go Trip Tracker project offers a comprehensive solution for modernizing trip scheduling and management within the medical transportation sector. Developed with a focus on enhancing driver efficiency and passenger communication, this intuitive web application simplifies trip planning and execution.',
    projectChallenges: [
      'Converting unstructured email dispatches into structured trip data',
      'Optimizing complex multi-passenger routes across a wide geographical area',
      'Creating an intuitive interface for drivers with varying technical skills',
      'Implementing real-time schedule updates and conflict detection',
      'Ensuring compliance with healthcare privacy regulations'
    ],
    projectSolution: 'Developed a full-stack application using Nuxt 3, Vue 3, and TypeScript with Tailwind CSS. Integrated OpenAI\'s Chat Completion API with GPT-3.5-Turbo to parse and structure email dispatches into formatted trip data. Implemented Google Maps API for route optimization and visualization. Created a Prisma database with Supabase for secure data storage and management.',
    projectOutcome: 'The Trip Tracker system has revolutionized Granny Go Go\'s operations, reducing scheduling errors by 90% and decreasing route planning time by 65%. Drivers now have access to comprehensive trip details at a glance, resulting in improved on-time performance and enhanced passenger satisfaction. The AI-powered scheduling system continues to learn and improve, providing increasingly accurate route suggestions.',
    screenshots: [
      '/images/screenshots/ggg-dashboard.jpg',
      '/images/screenshots/ggg-trip-detail.jpg',
      '/images/screenshots/ggg-route-map.jpg'
    ]
  },
  'mossaway': {
    name: 'MossAway Victoria',
    description: 'Professional roof cleaning and moss removal service specializing in residential and commercial properties.',
    industry: 'Property Maintenance',
    logo: '/logos/client-logos/mossaway.png',
    slug: 'mossaway',
    years: [2021, 2022, 2023],
    technologies: [
      'Astro',
      'Svelte',
      'TailwindCSS',
    ],
    companySize: '5-10 employees',
    website: 'https://mossawayvictoria.ca/',
    projectTitle: 'Multiple Service Projects',
    projectDescription: 'Delivered a comprehensive suite of digital solutions for MossAway Victoria, including their custom CMS website, specialized quoting tools for window cleaning project evaluation, and customer journey automation systems. These integrated solutions helped streamline operations while enhancing the customer experience across multiple touchpoints.',
    projectChallenges: [
      'Designing a visually engaging site that appeals to residential and commercial property owners',
      'Implementing effective SEO strategies for a local service business',
      'Creating a custom CMS solution that\'s easy for non-technical staff to use',
      'Optimizing image-heavy content for fast loading on mobile devices',
      'Differentiating the Victoria franchise from the parent company while maintaining brand consistency'
    ],
    projectSolution: 'Developed a modern, responsive website using Astro and Svelte with TailwindCSS for styling. Created a custom lightweight CMS solution to allow easy content updates without requiring technical knowledge. Implemented AI-generated monster images for engaging visual content. Optimized the site for local SEO with structured data, location-specific content, and performance optimizations.',
    projectOutcome: 'The website successfully ranked organically on Google for targeted local keywords, generating a steady stream of qualified leads for the business. Despite the eventual sale of MossAway Victoria, the website proved highly effective during its operation, serving as a powerful marketing tool that converted visitors into customers through its compelling content and streamlined contact process.',
    screenshots: [
      '/images/screenshots/mossaway-home.jpg',
      '/images/screenshots/mossaway-services.jpg',
      '/images/screenshots/mossaway-gallery.jpg'
    ]
  },
  'telus': {
    name: 'TELUS',
    description: 'Leading telecommunications company providing a wide range of communications products and services.',
    industry: 'Telecommunications',
    logo: '/logos/client-logos/TELUS_Logo.svg',
    slug: 'telus',
    years: [2025],
    isCurrent: true,
    technologies: [
      'Vue.js',
      'TypeScript',
      'TailwindCSS',
    ],
    companySize: '10,000+ employees',
    website: 'https://www.telus.com/',
    projectTitle: 'Tech Central Hub',
    projectDescription: 'Tech Central is a centralized technician hub that consolidates 9 different internal sites into one unified platform for technicians, managers, contracted partners, and more. The hub provides access to news, information, job aids, videos, training, and other essential resources, all under one centralized location to improve efficiency and accessibility.',
    projectChallenges: [
      'Integrating with multiple existing internal systems and APIs',
      'Creating a unified interface for diverse team needs and workflows',
      'Implementing role-based access controls for sensitive operational data',
      'Designing for performance with large datasets and concurrent users',
      'Meeting strict corporate security and compliance requirements'
    ],
    projectSolution: 'Built a responsive Vue.js application with TypeScript for type safety and code quality. Utilized TailwindCSS for consistent styling across the application. Implemented a modular component system to allow for easy customization based on department needs. Created comprehensive documentation and conducted training sessions for internal teams.',
    projectOutcome: 'The dashboard application significantly improved operational efficiency, reducing time spent on routine tasks by 40% and enhancing cross-departmental collaboration. The modular design has allowed TELUS to continuously expand the application\'s functionality based on evolving business needs.',
    screenshots: [
      '/images/screenshots/telus-dashboard.jpg',
      '/images/screenshots/telus-reports.jpg',
      '/images/screenshots/telus-admin.jpg'
    ]
  }
};
