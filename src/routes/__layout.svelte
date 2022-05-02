<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>WordleHack <a href="https://github.com/Inqnuam/wordlehack">Source Code</a></p>
</footer>
