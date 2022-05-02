<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	//	export const prerender = true;
	import { fly } from 'svelte/transition';
</script>

<script>
	export let testedWords;
</script>

<div style="margin: 1rem;">
	{#each testedWords as tested}
		<div in:fly>
			{#each Object.keys(tested) as letter, i}
				<input
					class="letter {tested[letter].index == -1
						? 'letter-absent'
						: tested[letter].index == i
						? 'letter-correct'
						: 'letter-elsewhere'}"
					type="text"
					maxlength="1"
					value={tested[letter].value.toUpperCase()}
					disabled
				/>
			{/each}
		</div>
	{/each}
</div>

<style>
	:global(input) {
		width: 30px;
	}
</style>
