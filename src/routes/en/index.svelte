<script>
	import { onMount } from "svelte";
	import { get } from "svelte/store";
	import { genInputs } from "$lib/core/genInputs";
	import { filterWords } from "$lib/core/filterWords";
	import TestedWords from "$lib/components/TestedWords.svelte";
	import WordInput from "$lib/components/WordInput.svelte";
	import FilteredWords from "$lib/components/FilteredWords.svelte";

	const ENTER = "Enter";
	const N_ENTER = "NumpadEnter";

	let letterCount;
	let wordsList;
	let newWord = {};
	let latestFilter = [];
	let testedWords = [];
	let errMsg = "";
	let findIsDisabled = true;

	function reset() {
		latestFilter = [];
		testedWords = [];
		newWord = genInputs(letterCount);
		document.getElementById("letter0").focus();
	}

	function revertLast() {
		testedWords.splice(testedWords.length - 1, 1);

		if (testedWords.length > 0) {
			let items = wordsList;
			for (const tested of testedWords) {
				items = filterWords(items, tested);
			}
			latestFilter = items;
		} else {
			latestFilter = [];
		}

		testedWords = testedWords;
		document.getElementById("letter0").focus();
	}

	function calculate() {
		const items = latestFilter.length > 0 ? latestFilter : wordsList;
		latestFilter = filterWords(items, newWord);

		testedWords.push(newWord);
		testedWords = testedWords;
		newWord = genInputs(letterCount);

		document.getElementById("letter0").focus();
	}

	function setBtnState() {
		findIsDisabled = Object.keys(newWord)
			.map((letter) => newWord[letter].value.trim() == "")
			.includes(true);
	}

	async function setWordsList() {
		switch (letterCount) {
			case 5:
				const { enWords5 } = await import("$lib/words/en/words5.js");
				wordsList = get(enWords5);
				break;

			default:
				throw new Error(`Wordle avec ${letterCount} lettres n'est pas supporté`);
		}
	}

	$: newWord, setBtnState();

	onMount(async () => {
		const parameters = new URLSearchParams(window.location.search);

		letterCount = Number(parameters.get("letter"));
		newWord = genInputs(letterCount);
		try {
			await setWordsList();
			document.getElementById("letter0").focus();
			document.addEventListener("keyup", (e) => {
				if ((e.code == ENTER || e.code == N_ENTER) && !findIsDisabled) {
					e.preventDefault();
					calculate();
				}
			});
		} catch (error) {
			errMsg = error.message;
		}
	});
</script>

<svelte:head>
	<title>{letterCount ?? 5} letters - English - Wordle Hack</title>
</svelte:head>

{#if wordsList}
	<TestedWords {testedWords} />

	<WordInput bind:newWord {testedWords} />

	<div style="margin: 15px;">
		<button on:click={calculate} disabled={findIsDisabled}>Find</button>
		{#if testedWords.length > 0}
			<button on:click={revertLast}>Revert</button>
			<button on:click={reset}>Restart</button>
		{/if}
	</div>

	<FilteredWords bind:newWord {latestFilter} />
{:else}
	{errMsg}
{/if}
