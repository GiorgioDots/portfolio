<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { WithElementRef } from '../utils';
	import { setActiveModal, type ModalProps } from '$lib/stores/modal-store.svelte';
	import { cn } from '$lib/utils/cn';

	let {
		ref = $bindable(null),
		class: className,
		children,
        modalId,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & ModalProps = $props();
</script>

<div
	bind:this={ref}
	data-slot="card"
	class={cn(
		'bg-w95-gray-500 border-t-w95-highlight border-l-w95-highlight border-b-w95-downlight-500 border-r-w95-downlight-500 border-2',
		className
	)}
    onclick={() => setActiveModal(modalId)}
	{...restProps}
>
	<div class="border-w95-gray-500 border-2">
		{@render children?.()}
	</div>
</div>
