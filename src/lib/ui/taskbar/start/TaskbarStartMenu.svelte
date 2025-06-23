<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { Position } from './position';

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
	<div bind:this={menu} class="menu absolute" style="left: {position.left}; top: {position.top};">
		<div class="win-95-title">Windows<span>95</span></div>
		<div class="menu-items">
			<button class="menu-item" onclick={(e) => e.stopPropagation()}>
				<img src="start-menu-icons/shut_down_normal-3.png" alt="Shutdown icon" />
				<span>
					{m.shutDown()}
				</span>
			</button>
		</div>
	</div>
</div>

<style>
	@reference '../../../../app.css';
	.menu {
		@apply bg-w95-gray-500 border-t-w95-highlight border-l-w95-highlight border-b-w95-downlight-500 border-r-w95-downlight-500 flex border-2;
	}
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
	.win-95-title > span {
		@apply text-w95-highlight font-light;
	}
	.menu-items {
		@apply border-r-2 border-transparent;
	}
	.menu-item {
		@apply hover:bg-w95-title-active pr-4 font-extralight flex h-10 w-full cursor-default items-center gap-2 px-1 py-0.5 hover:text-white;
	}
	.menu-item > span:first-letter {
		text-decoration: underline;
	}
</style>
