<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { randomNumber } from '$lib/utils/random';
	import { sleep } from '$lib/utils/sleep';

	const { onLoaded }: { onLoaded: () => void } = $props();

	const loadText = async (txt: string, ms: number): Promise<void> => {
		await sleep(ms);
		shownTexts.push(txt);
	};

	const shownTexts = $state<string[]>([]);
	let blinkTxt = $state('_');
	let booted = $state(false);

	const textsLoaded = $derived(() => {
		return shownTexts.length == promises.length;
	});

	$effect(() => {
		if (!textsLoaded()) return;

		const interval = setInterval(() => {
			blinkTxt = blinkTxt == '_' ? '' : '_';
			console.log();
			if (booted) {
				clearInterval(interval);
			}
		}, 350);

		setTimeout(
			() => {
				booted = true;
			},
			randomNumber(2000, 2600)
		);

		return () => clearInterval(interval);
	});

	$effect(() => {
		if (!booted) return;
		setTimeout(onLoaded, randomNumber(3000, 4000));
	});

	const promises: Promise<void>[] = [
		loadText('SeaBIOS (version rel-1.16.2-0-gea1b7a0)', randomNumber(100, 150)),
		loadText('Booting from Hard Disk...', randomNumber(250, 350)),
		loadText('Starting Windots 95...', randomNumber(750, 950))
	];
</script>

<main
	class={cn(
		'text-loading-screen-foreground h-full bg-black',
		booted ? 'flex items-center justify-center p-8' : ''
	)}
>
	{#if !booted}
		{#each shownTexts as txt}
			<div>{txt}</div>
		{/each}
		{#if shownTexts.length == promises.length}
			<div class="mt-8">{blinkTxt}</div>
		{/if}
	{:else}
		<img src="loading-screen.gif" alt="Loading screen" />
	{/if}
</main>
