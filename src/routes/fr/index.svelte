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
			case 4:
				const { frWords4 } = await import("$lib/words/fr/words4.js");
				wordsList = get(frWords4);
				break;
			case 5:
				const { frWords5 } = await import("$lib/words/fr/words5.js");
				wordsList = get(frWords5);
				break;

			case 6:
				const { frWords6 } = await import("$lib/words/fr/words6.js");
				wordsList = get(frWords6);
				break;

			case 7:
				const { frWords7 } = await import("$lib/words/fr/words7.js");
				wordsList = get(frWords7);
				break;

			case 8:
				const { frWords8 } = await import("$lib/words/fr/words8.js");
				wordsList = get(frWords8);
				break;

			case 9:
				const { frWords9 } = await import("$lib/words/fr/words9.js");
				wordsList = get(frWords9);
				break;

			case 10:
				const { frWords10 } = await import("$lib/words/fr/words10.js");
				wordsList = get(frWords10);
				break;

			case 11:
				const { frWords11 } = await import("$lib/words/fr/words11.js");
				wordsList = get(frWords11);
				break;

			case 12:
				const { frWords12 } = await import("$lib/words/fr/words12.js");
				wordsList = get(frWords12);
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
	<title>{letterCount} lettres - Français - Wordle Hack</title>
	<meta name="description" content="About this app" />
</svelte:head>

{#if wordsList}
	<TestedWords {testedWords} />

	<WordInput bind:newWord {testedWords} />

	<div style="margin: 15px;">
		<button on:click={calculate} disabled={findIsDisabled}>Trouver</button>
		{#if testedWords.length > 0}
			<button on:click={revertLast}>Annuler</button>
			<button on:click={reset}>Recommencer</button>
		{/if}
	</div>

	<FilteredWords bind:newWord {latestFilter} />
{:else}
	{errMsg}
{/if}
