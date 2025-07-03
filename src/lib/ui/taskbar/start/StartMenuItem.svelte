<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	export type StartMenuItemProps = HTMLButtonAttributes & {
		icon: string;
		iconAlt: string;
		text: string;
	};
	let props: StartMenuItemProps = $props();
	let { icon, iconAlt, text, onclick } = props;
</script>

<button
	class="hover:bg-w95-title-active flex h-10 w-full cursor-default items-center gap-2 px-1 py-0.5 pr-4 font-extralight hover:text-white"
	onclick={(e) => {
		e.stopPropagation();
		onclick?.(e);
	}}
	{...props}
>
	<img src={icon} alt={iconAlt} />
	<span class="first-letter:underline">
		{text}
	</span>
</button>
