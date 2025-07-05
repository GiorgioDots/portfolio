<script lang="ts">
	import Button from '../../components/button/Button.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import TaskbarStartMenu from './TaskbarStartMenu.svelte';

	let active = $state(false);
	$effect(() => {
		console.log(active);
	});

	let start: HTMLButtonElement | undefined = $state(undefined);
	let menu: HTMLDivElement | undefined = $state(undefined);

	let position: { left: string; top: string } = $state({ left: '0px', top: '0px' });
	function updatePosition() {
		if (!start || !menu) return;
		const startRect = start.getBoundingClientRect();
		const menuHeight = menu.getBoundingClientRect().height;

		position = {
			left: `${startRect.left}px`,
			top: `${startRect.top - menuHeight + 1}px`
		};
	}
</script>

<button
	bind:this={start}
	class="btn btn-border relative flex items-center"
	class:btn-border-active={active}
	onclick={() => {
		active = !active;
		updatePosition();
	}}
>
	<span class="btn-inner">
		<img
			src="win95-logo.png"
			alt="logo"
			height="19"
			class="absolute top-[2px] left-[3px] max-w-[19px]"
		/>
		<span class="ml-6"> {m.start()} </span>
	</span>
</button>
<!-- <Button bind:active bind:ref={start} onclick={() => updatePosition()}></Button> -->

<TaskbarStartMenu bind:active bind:menu {position} />

<style>
	@reference '../../../../app.css';
	.btn {
		@apply bg-w95-gray-500 p-[2px] leading-4 font-bold outline-none;
	}
	.btn-border {
		@apply border-t-w95-highlight border-l-w95-highlight border-b-w95-downlight-500 border-r-w95-downlight-500 border-2;
	}
	.btn-border-active {
		@apply border-t-w95-downlight-500 border-l-w95-downlight-500 border-b-w95-highlight border-r-w95-highlight;
	}

	.btn-inner {
		@apply border border-transparent;
	}
	.btn-border-active > .btn-inner,
	.btn:active > .btn-inner,
	.btn:focus > .btn-inner {
		@apply border border-dotted border-black;
	}
</style>
