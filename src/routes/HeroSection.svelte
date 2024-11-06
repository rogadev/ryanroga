<script lang="ts">
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'

  const taglines = [
    'Solutions Architect',
    'Problem Solver',
    'Frontend Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Full-Stack Developer',
    'Vue Developer',
    'SvelteKit Developer',
    'Web Developer',
    'Nuxt Developer',
    'Backend Developer',
  ]

  let currentTagline = taglines[0]
  let displayText = currentTagline
  let isTyping = false
  let isDeleting = false
  let isIdle = true
  let showPositionOptions = false

  function getRandomTagline(): string {
    const newTagline = taglines[Math.floor(Math.random() * taglines.length)]
    return newTagline === currentTagline ? getRandomTagline() : newTagline
  }

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async function updateText() {
    while (true) {
      // Delete current text
      isIdle = false
      isDeleting = true
      while (displayText.length > 0) {
        displayText = displayText.slice(0, -1)
        await sleep(25) // Delete at 2x speed (25ms instead of 50ms)
      }
      isDeleting = false

      // Get new tagline
      currentTagline = getRandomTagline()

      // Type new text
      isTyping = true
      while (displayText.length < currentTagline.length) {
        displayText = currentTagline.slice(0, displayText.length + 1)
        await sleep(50) // Normal typing speed
      }
      isTyping = false
      isIdle = true

      // Wait before next cycle
      await sleep(2000)
    }
  }

  function navigateToPosition(position: 'frontend' | 'backend' | 'fullstack') {
    goto(`/${position}`)
  }

  onMount(() => {
    updateText()
  })
</script>

<main
  class="min-h-screen flex flex-col items-center justify-center px-4 py-16 max-w-3xl mx-auto"
>
  <section class="text-center">
    <h1 class="text-7xl font-extrabold mb-4 font-display tracking-tight">
      Ryan Roga
    </h1>
    <h2 class="text-2xl text-gray-600 h-8">
      {displayText}<span class:blink={isTyping || isDeleting || isIdle}>|</span>
    </h2>
  </section>

  <section class="mt-16 text-center">
    <p class="text-lg text-gray-700 leading-relaxed">
      A talented web developer with a diverse range of skills. Constantly
      learning and trying new things. Looking for a place to call home among
      other like-minded developers working together to solve interesting
      problems.
    </p>
  </section>
</main>

<style>
  .blink {
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
</style>
