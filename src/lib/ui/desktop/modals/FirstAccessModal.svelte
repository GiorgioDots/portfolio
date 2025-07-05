<script lang="ts">
	import * as Modal from '$lib/ui/components/modal';

	let props: { message: string } = $props();
</script>

<Modal.Modal class="w-100">
	<Modal.ModalHeader>
		Welcome
	</Modal.ModalHeader>
	<p>{props.message}</p>
</Modal.Modal>
