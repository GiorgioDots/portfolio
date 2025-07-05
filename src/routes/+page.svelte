<script>
	import { appState } from '$lib/stores/app-store.svelte';
	import { modalsStore, setAllInactive } from '$lib/stores/modal-store.svelte';
	import Desktop from '$lib/ui/desktop/Desktop.svelte';
	import LoadingScreen from '$lib/ui/loading/LoadingScreen.svelte';
	import TaskBar from '$lib/ui/taskbar/Taskbar.svelte';
	import { cn } from '$lib/utils/cn';
	import { randomNumber } from '$lib/utils/random';

	let appLoaded = $state(false);
	let isShuttedDown = $state(false);

	$effect(() => {
		const lastTimeStarted = localStorage.getItem('last_access');
		if (lastTimeStarted == null) return;
		if (new Date().getTime() - +lastTimeStarted < 1000 * 60 * 60 * 1) {
			appLoaded = true;
			appState.alreadyLoaded = true;
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

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class={cn('flex h-dvh flex-col', appLoaded && !isShuttedDown ? 'bg-w95-bg' : 'bg-black')}
	onclick={() => setAllInactive()}
>
	{#if appLoaded && !isShuttedDown}
		<Desktop />
		<TaskBar />
	{:else if !appLoaded && !isShuttedDown}
		<LoadingScreen onLoaded={() => (appLoaded = true)} />
	{:else}
		<div class="text-loading-screen-foreground h-full">
			<div>Thanks for visiting!</div>
			<div>Refresh the page to reload the application</div>
		</div>
	{/if}
</div>
