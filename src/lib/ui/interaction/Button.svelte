<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	interface HTMLButtonAttributesWithActive extends HTMLButtonAttributes {
		active?: boolean;
		ref?: HTMLButtonElement
	}

	let { active = $bindable(false), ref = $bindable(undefined), ...props }: HTMLButtonAttributesWithActive = $props();
</script>

<button
	bind:this={ref}
	class="btn btn-border relative flex items-center"
	{...props}
	class:btn-border-active={active}
	onclick={(e) => {
		active = !active;
		props.onclick?.(e);
	}}
>
	<span class="btn-inner">
		{@render props.children?.()}
	</span>
</button>

<style>
	@reference '../../../app.css';
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
