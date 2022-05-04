<script>
	import { createEventDispatcher } from "svelte";
	import { fly } from "svelte/transition";
	export let isOpen = false;
	export let title = "Modal";
	export let btnTitle = "Print";
	export let submitIsDisabled = false;
	const dispatch = createEventDispatcher();
	$: isOpen, dispatch(isOpen ? "open" : "close");
</script>

{#if isOpen}
	<div
		class="modal"
		style="display: block;"
		tabindex="-1"
		in:fly|local={{ y: -500, duration: 500 }}
		out:fly|local={{ y: 100, duration: 100 }}
	>
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<b class="modal-title">{title}</b>
					<button type="button" class="btn-close" on:click={() => (isOpen = false)} />
				</div>
				<div class="modal-body">
					<slot />
				</div>

				<div class="customFooter">
					<div>
						<button type="button" on:click={() => (isOpen = false)}>Fermer</button>

						<button
							type="submit"
							disabled={submitIsDisabled}
							on:click={() => {
								dispatch("submit");
							}}>{btnTitle}</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="modal-backdrop" out:fly|local={{ duration: 500 }} style="display: block;" />
{/if}

<style>
	.customFooter {
		display: flex;
		flex-wrap: wrap;
		flex-shrink: 0;
		align-items: center;
		justify-content: end;
		padding: 0.75rem;
		border-top: 1px solid #dee2e6;
		border-bottom-right-radius: calc(0.3rem - 1px);
		border-bottom-left-radius: calc(0.3rem - 1px);
		margin: 0.5rem !important;
	}

	.modal {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1055;
		display: none;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		overflow-y: auto;
		outline: 0;
	}
	.modal-dialog {
		position: relative;
		width: auto;
		margin: 0.5rem;
		pointer-events: none;
	}

	.modal-content {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		pointer-events: auto;
		background-color: #fff;
		background-clip: padding-box;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 0.3rem;
		outline: 0;
	}

	.modal-header {
		display: flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 1rem;
		border-bottom: 1px solid #dee2e6;
		border-top-left-radius: calc(0.3rem - 1px);
		border-top-right-radius: calc(0.3rem - 1px);
	}

	.modal-body {
		position: relative;
		flex: 1 1 auto;
		padding: 1rem;
	}
	.modal-title {
		margin-bottom: 0;
		line-height: 1.5;
		font-size: 1.25rem;
	}

	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1050;
		width: 100vw;
		height: 100vh;
		background-color: #000;
		opacity: 0.5;
	}

	.btn-close {
		box-sizing: content-box;
		width: 1em;
		height: 1em;
		padding: 0.25em 0.25em;
		color: #000;
		background: transparent
			url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
			center/1em auto no-repeat;
		border: 0;
		border-radius: 0.25rem;
		opacity: 0.5;
	}
	.btn-close:focus {
		outline: 0;
		box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
		opacity: 1;
	}
</style>
