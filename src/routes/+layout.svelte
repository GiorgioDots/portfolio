<script lang="ts">
	import ModalHost from '$lib/ui/components/modal/modal-host.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<ModalHost />
{@render children()}
