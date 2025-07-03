<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { appState } from '$lib/stores/app-store.svelte';
	import type { Position } from './position';
	import StartMenuItem from './StartMenuItem.svelte';

	let {
		active = $bindable(),
		position,
		menu = $bindable()
	}: { active: boolean; position: Position; menu: HTMLDivElement | undefined } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="absolute top-0 left-0 h-full w-full"
	class:invisible={!active}
	class:pointer-events-none={!active}
	onclick={() => (active = false)}
>
	<div
		bind:this={menu}
		class="bg-w95-gray-500 border-t-w95-highlight border-l-w95-highlight border-b-w95-downlight-500 border-r-w95-downlight-500 absolute flex border-2"
		style="left: {position.left}; top: {position.top};"
	>
		<div class="win-95-title">Windows<span class="text-w95-highlight font-light">95</span></div>
		<div class="border-r-2 border-transparent">
			<StartMenuItem
				icon="start-menu-icons/shut_down_normal-3.png"
				iconAlt="Shutdown icon"
				text={m.shutDown()}
			/>
			<StartMenuItem
				icon="start-menu-icons/shut_down_normal-3.png"
				iconAlt="Shutdown icon"
				text={m.shutDown()}
			/>
			<StartMenuItem
				icon="start-menu-icons/shut_down_normal-3.png"
				iconAlt="Shutdown icon"
				text={m.shutDown()}
			/>
			<StartMenuItem
				icon="start-menu-icons/shut_down_normal-3.png"
				iconAlt="Shutdown icon"
				text={m.shutDown()}
			/>
			<StartMenuItem
				icon="start-menu-icons/shut_down_normal-3.png"
				iconAlt="Shutdown icon"
				text={m.shutDown()}
				onclick={() => appState.isShuttingDown = true}
			/>
		</div>
	</div>
</div>

<style>
	@reference '../../../../app.css';
	.win-95-title {
		writing-mode: vertical-lr;
		text-orientation: sideways-right;
		transform: rotate(180deg);
		padding: 4px 0 4px 0;
		font-size: 20px;
		font-weight: 900;
		letter-spacing: 1px;
		@apply bg-w95-gray-600 text-w95-gray-500;
	}
</style>
