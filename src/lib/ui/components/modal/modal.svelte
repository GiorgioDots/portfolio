<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { WithElementRef } from '../utils';
	import { cn } from '$lib/utils/cn';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	bind:this={ref}
	data-slot="card"
	class={cn(
		'bg-w95-gray-500 border-2 border-t-w95-highlight border-l-w95-highlight border-b-w95-downlight-500 border-r-w95-downlight-500',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
