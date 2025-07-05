<script lang="ts">
	import { modalsStore } from '$lib/stores/modal-store.svelte';
</script>

{#each $modalsStore.activeModals as modal}
	<div
		class="absolute"
		draggable="true"
		style:z-index={modal.isTop ? '999' : `${100 + $modalsStore.activeModals.indexOf(modal)}`}
	>
		<modal.component {...modal.props}></modal.component>
	</div>
{/each}
