<script lang="ts">
  import '../../app.css'
  import Icon from '@iconify/svelte'
  import { Button } from '$lib/components/ui/button'
</script>

<div class="min-h-screen bg-gray-100">
  <!-- Header Section -->
  <header
    class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-6"
  >
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-2">Ryan Roga</h1>
      <p class="text-xl opacity-90 mb-6">
        Backend Developer crafting robust and scalable APIs
      </p>

      <div class="flex gap-4 items-center">
        <Icon icon="logos:javascript" class="text-3xl" />
        <Icon icon="logos:typescript-icon" class="text-3xl" />
        <Icon icon="logos:deno" class="text-3xl" />
        <Icon icon="logos:nodejs-icon" class="text-3xl" />
        <Icon icon="logos:express" class="text-3xl" />
        <Icon icon="logos:hono" class="text-3xl" />
      </div>
    </div>
  </header>

  <main class="container mx-auto py-6 px-4">
    <slot />
  </main>
</div>
