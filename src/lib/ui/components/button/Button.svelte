<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { WithElementRef } from '../utils';

	let active = $state(false);
	let { ref = $bindable(undefined), ...props }: WithElementRef<HTMLButtonAttributes> = $props();
</script>

<button
	bind:this={ref}
	class="btn btn-border relative flex items-center"
	class:btn-border-active={active}
	onmousedown={(e) => {
		active = true;
		props.onmousedown?.(e);
	}}
	onmouseup={(e) => {
		active = false;
		props.onmouseup?.(e);
	}}
	onmouseleave={(e) => {
		active = false;
		props.onmouseleave?.(e);
	}}
	{...props}
>
	<span class="btn-inner">
		{@render props.children?.()}
	</span>
</button>

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
