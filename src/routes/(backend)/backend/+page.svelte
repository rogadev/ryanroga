<script lang="ts">
  import { fade } from 'svelte/transition'

  let currentEndpoint = '/api'
  let jsonResponse = {
    message: "Welcome to Ryan Roga's Backend API",
    description:
      'This interactive API allows you to explore my background and skills',
    available_endpoints: [
      '/api/resume',
      '/api/projects',
      '/api/experience',
      '/api/languages',
      '/api/education',
      '/api/skills',
      '/api/contact',
    ],
    instructions:
      'Click any of the endpoint buttons below to view the corresponding data',
  }

  function formatJSON(obj: any) {
    return JSON.stringify(obj, null, 2)
  }

  async function fetchEndpoint(endpoint: string) {
    currentEndpoint = endpoint
    // In a real app, this would fetch from an API
    // For now using mock data
    switch (endpoint) {
      case '/api/resume':
        jsonResponse = {
          name: 'Ryan Roga',
          title: 'Backend Developer',
          summary:
            'Experienced backend developer specializing in Node.js and TypeScript...',
          // Add more resume data
        }
        break
      // Add other endpoint cases
      default:
        jsonResponse = {
          error: 'Endpoint not found',
        }
    }
  }
</script>

<!-- Main Content -->
<main class="max-w-4xl mx-auto py-8 px-6">
  <!-- JSON Display Window -->
  <div class="mb-8">
    <div class="flex items-center bg-gray-800 rounded-t-lg px-4 py-2">
      <span class="text-gray-400 text-sm font-mono">{currentEndpoint}</span>
    </div>
    <pre class="bg-gray-900 text-white p-6 rounded-b-lg overflow-x-auto">
        <code transition:fade>{formatJSON(jsonResponse)}</code>
      </pre>
  </div>

  <!-- API Endpoints -->
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <button
      on:click={() => fetchEndpoint('/api')}
      class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
    >
      /api
    </button>
    <button
      on:click={() => fetchEndpoint('/api/resume')}
      class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
    >
      /resume
    </button>
    <button
      on:click={() => fetchEndpoint('/api/projects')}
      class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      /projects
    </button>
    <button
      on:click={() => fetchEndpoint('/api/experience')}
      class="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
    >
      /experience
    </button>
    <button
      on:click={() => fetchEndpoint('/api/languages')}
      class="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
    >
      /languages
    </button>
    <button
      on:click={() => fetchEndpoint('/api/skills')}
      class="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
    >
      /skills
    </button>
    <button
      on:click={() => fetchEndpoint('/api/education')}
      class="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
    >
      /education
    </button>
    <button
      on:click={() => fetchEndpoint('/api/contact')}
      class="px-6 py-3 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-700 transition-colors"
    >
      /contact
    </button>
  </div>
</main>
