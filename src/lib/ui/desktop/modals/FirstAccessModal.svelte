<script lang="ts">
	import * as Modal from '$lib/ui/components/modal';
	import type { ModalProps } from '$lib/stores/modal-store.svelte';

	let props: { message: string } & ModalProps = $props();
</script>

<Modal.Modal class="w-100" {...props}>
	<Modal.ModalHeader {...props}>Welcome</Modal.ModalHeader>
	<p>{props.message}</p>
</Modal.Modal>
