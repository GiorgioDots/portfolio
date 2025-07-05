<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { WithElementRef } from '../utils';
	import { cn } from '$lib/utils/cn';

	type ModalHeaderButtonState = {
		visible?: boolean;
		disable?: boolean;
	};

	type ModalHeaderProps = {
		minimizeBtn: ModalHeaderButtonState;
		maximizeBtn: ModalHeaderButtonState;
		closeBtn: ModalHeaderButtonState;
		iconSrc: string;
	};

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & ModalHeaderProps = $props();
</script>

<div
	bind:this={ref}
	data-slot="card"
	class={cn('bg-w95-title-active px-0.5 text-white', className)}
	{...restProps}
>
	{@render children?.()}
</div>
