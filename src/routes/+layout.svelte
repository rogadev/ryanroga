<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="min-h-[100vh]">
	{@render children()}
</main>

<footer class="bg-gray-100 py-4 text-center text-gray-600 text-sm">
	<nav class="mb-2">
		<a href="/contact" class="hover:text-gray-900 mx-2">Contact</a>
		<a href="/resume" class="hover:text-gray-900 mx-2">Resume</a>
		<a href="https://roga.dev" class="hover:text-gray-900 mx-2" target="_blank" rel="noopener noreferrer">Freelance Services</a>
	</nav>
	<p>&copy; {new Date().getFullYear()} Ryan Roga. All rights reserved.</p>
</footer>
