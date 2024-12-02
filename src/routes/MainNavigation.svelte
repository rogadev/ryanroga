<script lang="ts">
  import { preloadCode } from '$app/navigation'
  let leftArrowAnimating = false
  let rightArrowAnimating = false
  let leftArrowColor = 'currentColor'
  let rightArrowColor = 'currentColor'
  let leftArrowInterval: number
  let rightArrowInterval: number

  function animateLeftArrow() {
    leftArrowAnimating = true
    leftArrowInterval = setInterval(() => {
      const r = Math.floor(Math.random() * 255)
      const g = Math.floor(Math.random() * 255)
      const b = Math.floor(Math.random() * 255)
      leftArrowColor = `rgb(${r} ${g} ${b})`
    }, 100)
  }

  function animateRightArrow() {
    rightArrowAnimating = true
    rightArrowInterval = setInterval(() => {
      const r = Math.floor(Math.random() * 255)
      const g = Math.floor(Math.random() * 255)
      const b = Math.floor(Math.random() * 255)
      rightArrowColor = `rgb(${r} ${g} ${b})`
    }, 100)
  }

  function stopLeftArrow() {
    leftArrowAnimating = false
    leftArrowColor = 'currentColor'
    clearInterval(leftArrowInterval)
  }

  function stopRightArrow() {
    rightArrowAnimating = false
    rightArrowColor = 'currentColor'
    clearInterval(rightArrowInterval)
  }
</script>

<section class="max-w-4xl mx-auto px-4 py-12 mb-52">
  <h2 class="text-2xl font-bold text-center mb-8">
    What kind of position are you hiring for?
  </h2>

  <div class="flex items-stretch gap-4">
    <!-- Left arrows -->
    <div
      class="flex items-center text-4xl transition-all duration-300 relative text-gray-400 rounded-full"
      class:scale-125={leftArrowAnimating}
      style="color: {leftArrowColor}"
    >
      <div
        class="absolute inset-0 blur-sm transition-opacity duration-300 rounded-full"
        style="background: {leftArrowColor}; opacity: {leftArrowAnimating
          ? 0.3
          : 0}"
      ></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        ><g fill="none" fill-rule="evenodd"
          ><path
            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
          /><path
            fill="currentColor"
            d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.122 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122l-5.66-5.658Z"
          /></g
        ></svg
      >
    </div>

    <div class="flex-1 flex flex-col gap-4">
      <div class="grid grid-cols-2 gap-4 mb-4">
        <!-- Backend Developer -->
        <a
          href="/backend"
          on:mouseenter={() => {
            preloadCode('/backend')
            animateLeftArrow()
          }}
          on:mouseleave={() => {
            stopLeftArrow()
          }}
          class="group relative p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:from-indigo-600 hover:to-purple-700"
        >
          <div
            class="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"
          ></div>
          <div class="relative">
            <div class="flex items-center">
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-2">Backend Developer</h3>
                <p class="text-sm opacity-90">
                  API architecture, server-side magic, and scalable systems
                </p>
              </div>
            </div>
          </div>
        </a>

        <!-- Frontend Developer -->
        <a
          href="/frontend"
          on:mouseenter={() => {
            preloadCode('/frontend')
            animateRightArrow()
          }}
          on:mouseleave={() => {
            stopRightArrow()
          }}
          class="group relative p-6 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:from-pink-600 hover:to-orange-600"
        >
          <div
            class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-orange-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"
          ></div>
          <div class="relative">
            <div class="flex items-center">
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-2">Frontend Developer</h3>
                <p class="text-sm opacity-90">
                  User-focused designs, smooth animations, and delightful UX
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="grid grid-cols-1">
        <!-- Full-Stack Developer -->
        <a
          href="/fullstack"
          on:mouseenter={() => {
            preloadCode('/fullstack')
            animateLeftArrow()
            animateRightArrow()
          }}
          on:mouseleave={() => {
            stopLeftArrow()
            stopRightArrow()
          }}
          class="group relative p-6 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:from-teal-600 hover:to-emerald-600 mb-10"
        >
          <div
            class="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"
          ></div>
          <div class="relative">
            <div class="flex items-center">
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-2">Full-Stack Developer</h3>
                <p class="text-sm opacity-90">
                  The best of both worlds - from database to deployment, I've
                  got you covered
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- Right arrows -->
    <div
      class="flex items-center text-4xl transition-all duration-300 relative text-gray-400 rounded-full"
      class:scale-125={rightArrowAnimating}
      style="color: {rightArrowColor}"
    >
      <div
        class="absolute inset-0 blur-sm transition-opacity duration-300 rounded-full"
        style="background: {rightArrowColor}; opacity: {rightArrowAnimating
          ? 0.3
          : 0}"
      ></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        ><g fill="none" fill-rule="evenodd"
          ><path
            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
          /><path
            fill="currentColor"
            d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z"
          /></g
        ></svg
      >
    </div>
  </div>
</section>
