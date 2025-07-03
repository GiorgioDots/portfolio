<script>
	import { appState } from '$lib/stores/app-store.svelte';
	import Desktop from '$lib/ui/Desktop.svelte';
	import LoadingScreen from '$lib/ui/loading/LoadingScreen.svelte';
	import TaskBar from '$lib/ui/taskbar/Taskbar.svelte';
	import { randomNumber } from '$lib/utils/random';

	let appLoaded = $state(false);
	let isShuttedDown = $state(false);

	$effect(() => {
		const lastTimeStarted = localStorage.getItem('last_access');
		if (lastTimeStarted == null) return;
		if (new Date().getTime() - +lastTimeStarted < 1000 * 60 * 1) {
			appLoaded = true;
		}
	});
	$effect(() => {
		if (appLoaded && !appState.isShuttingDown) {
			localStorage.setItem('last_access', new Date().getTime().toString());
		}
		if (appState.isShuttingDown) {
			setTimeout(
				() => {
					localStorage.removeItem('last_access');
					isShuttedDown = true;
				},
				randomNumber(2000, 3000)
			);
		}
	});
</script>

<div class="flex h-dvh flex-col">
	{#if appLoaded && !isShuttedDown}
		<Desktop />
		<TaskBar />
	{:else if !appLoaded && !isShuttedDown}
		<LoadingScreen onLoaded={() => (appLoaded = true)} />
	{:else}
		<div class="text-loading-screen-foreground h-full bg-black">
			<div>Thanks for visiting!</div>
			<div>Refresh the page to reload the application</div>
		</div>
	{/if}
</div>
