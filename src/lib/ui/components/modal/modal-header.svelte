<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { WithElementRef } from '../utils';
	import { cn } from '$lib/utils/cn';
	import Button from '../button/Button.svelte';

	type ModalHeaderButtonState = {
		visible?: boolean;
		disable?: boolean;
	};

	type ModalHeaderProps = {
		minimizeBtn: ModalHeaderButtonState;
		maximizeBtn: ModalHeaderButtonState;
		closeBtn: ModalHeaderButtonState;
		iconSrc: string;
		active: boolean;
	};

	let {
		ref = $bindable(null),
		class: className,
		children,
		active,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & ModalHeaderProps = $props();
</script>

<div
	bind:this={ref}
	data-slot="card"
	class={cn(
		'px-0.5 ',
		active ? 'bg-w95-title-active' : 'bg-w95-title-inactive',
		className
	)}
	{...restProps}
>
	<div class="flex">
		<span>
			ICON
		</span>
		<span class="grow truncate text-white">
			{@render children?.()}
		</span>
		<span class="inline-flex">
			<Button>_</Button>
			<Button>Q</Button>
			<Button>X</Button>
		</span>
	</div>
</div>
