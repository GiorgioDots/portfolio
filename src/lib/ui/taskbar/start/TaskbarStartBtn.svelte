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

<Button bind:active bind:ref={start} onclick={() => updatePosition()}>
	<img src="win95-logo.png" alt="logo" height="19" class="absolute top-[2px] left-[3px] max-w-[19px]" />
	<span class="ml-6"> {m.start()} </span>
</Button>

<TaskbarStartMenu bind:active bind:menu {position} />
