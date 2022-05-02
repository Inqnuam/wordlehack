<script>
	export let latestFilter;
	export let newWord;

	function setWord(word) {
		Object.keys(newWord).forEach((letter, i) => {
			newWord[letter].value = word[i];
		});
	}
</script>

<div style="max-width: 500px;">
	{#each latestFilter as word}
		<span on:click={() => setWord(word.toUpperCase())}>{word.toUpperCase()}, </span>
	{/each}
</div>

<style>
	span {
		cursor: pointer;
	}
</style>
