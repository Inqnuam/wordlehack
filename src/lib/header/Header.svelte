<script>
	import Modal from "../components/Modal.svelte";
	import { languages } from "$lib/stores";
	import { onMount } from "svelte";
	import { dev } from "$app/env";

	const ROOT = import.meta.env.VITE_APP_ROOT ?? "";
	let selectedLangue;
	let isOpen = false;
	let startBtnTitle = "";

	const link = dev ? "/" : `/${ROOT}/`;

	function startGame() {
		window.location.href = link + `${selectedLangue.code}?letter=${selectedLangue.selected}`;
	}

	onMount(() => {
		let queryLangue = window.location.pathname.replace(ROOT, "");
		queryLangue = queryLangue.replaceAll("/", "");

		const params = new URLSearchParams(window.location.search);
		const queryLetter = Number(params.get("letter"));
		const foundLangue = $languages.find((x) => x.code == queryLangue);

		if (foundLangue) {
			selectedLangue = foundLangue;

			if (!isNaN(queryLetter)) {
				selectedLangue.selected = queryLetter;
				startBtnTitle = selectedLangue.selected;
			}
		}
	});
</script>

<header>
	<a href={link}> <h1>WordleHack!</h1></a>

	<div>
		<button class="startBtn" on:click={() => (isOpen = true)}
			>{#if startBtnTitle == ""}
				Start
			{:else}
				<img
					width="40"
					src={selectedLangue.flag}
					alt={selectedLangue.name}
					class="image"
					style="margin-right: 5px;"
				/>
				{startBtnTitle}
			{/if}</button
		>
		<hr style="opacity: 0.4;" />
	</div>
</header>

<Modal
	on:submit={startGame}
	bind:isOpen
	btnTitle="Commencer"
	submitIsDisabled={!selectedLangue}
	title="Choisir la langue et le nombre de lettres"
>
	<div class="modalContent">
		<div class="flags">
			{#each $languages as lang}
				<div class="container" on:click={() => (selectedLangue = lang)}>
					<img width="100" src={lang.flag} alt={lang.name} class="image" />
					<div class="overlay" class:active={selectedLangue?.code == lang.code}>
						{lang.name}
					</div>
				</div>
			{/each}
		</div>

		{#if selectedLangue}
			<div style="margin-top: 1rem;">
				{#each selectedLangue.letters as letter}
					<span
						class="letters"
						class:selectedLetter={selectedLangue.selected == letter}
						on:click={() => (selectedLangue.selected = letter)}>{letter}</span
					>
				{/each}
			</div>
		{/if}
	</div>
</Modal>

<style>
	.modalContent {
		display: flex;
		flex-direction: column;
	}

	.flags {
		display: flex;
		justify-content: center;
	}
	.letters {
		cursor: pointer;
		margin: 3px;
		border: 2px solid transparent;
		border-radius: 5px;
		background-color: #a4aec4;
		font-size: 28px;
		font-weight: 700;
		padding: 5px;
		color: #fff !important;
		transition: 0.5s ease;
	}
	.selectedLetter {
		background-color: #79b851 !important;
		border: 2px solid #79b851 !important;
	}

	* {
		box-sizing: border-box;
	}

	.container {
		position: relative;
		width: 15%;
		max-width: 300px;
		margin: 10px;
		cursor: pointer;
	}

	.image {
		display: block;
		width: 100%;
		height: auto;
	}

	.overlay {
		position: absolute;
		bottom: 0;
		background: #a4aec4;
		background: rgba(0, 0, 0, 0.5); /* Black see-through */
		color: #f1f1f1;
		width: 100%;
		transition: 0.5s ease;
		opacity: 0;
		color: white;
		padding: 8px;
		text-align: center;
		font-weight: 700;
	}

	.container:hover .overlay,
	.container .active {
		opacity: 1;
	}

	.active {
		background-color: rgb(121, 184, 81) !important;
	}

	.startBtn {
		display: flex;
		font-size: 24px;
	}
</style>
