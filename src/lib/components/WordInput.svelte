<script>
	import { fly } from 'svelte/transition';

	const RIGHT = 'ArrowRight';
	const LEFT = 'ArrowLeft';
	export let newWord;
	export let testedWords;

	const objLastIndex = Object.keys(newWord).length - 1;
</script>

<div in:fly>
	{#each Object.keys(newWord) as letter, i}
		{@const letterIndex = newWord[letter].index}

		<div class="inputBlock">
			<input
				id={letter}
				autocorrect="off"
				autocomplete="off"
				class="letter"
				class:letter-absent={letterIndex == -1}
				class:letter-correct={letterIndex == i}
				class:letter-elsewhere={letterIndex == -2}
				type="text"
				maxlength="1"
				bind:value={newWord[letter].value}
				on:input={(e) => {
					if (e.target.value !== '' && i < objLastIndex) {
						document.getElementById(`letter${i + 1}`).focus();
					}
				}}
				on:keyup={(e) => {
					if (e.code == RIGHT && i < objLastIndex) {
						document.getElementById(`letter${i + 1}`).focus();
					} else if (e.code == LEFT && i > 0) {
						document.getElementById(`letter${i - 1}`).focus();
					}
				}}
				on:change={(e) => {
					newWord[letter].value = newWord[letter].value.toUpperCase();
					const found = testedWords.find(
						(word) => word[letter].value.toUpperCase() == newWord[letter].value
					);
					if (found && found[letter].index == i) {
						newWord[letter].index = i;
					}
				}}
			/>
			<div>
				<span on:click={() => (newWord[letter].index = -1)}>⬜️</span>
				<span on:click={() => (newWord[letter].index = i)}>🟩</span>
				<span on:click={() => (newWord[letter].index = -2)}>🟨</span>
			</div>
		</div>
	{/each}
</div>

<style>
	span {
		cursor: pointer;
	}
	.inputBlock {
		display: inline-block;
		border: 2px solid #dee1e9;
		border-collapse: collapse;
		padding: 5.5px;
		margin-bottom: 5px;
	}
</style>
