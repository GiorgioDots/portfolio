<script>
	import { appState } from "$lib/stores/app-store.svelte";
	import { showModal } from "$lib/stores/modal-store.svelte";
	import FirstAccessModal from "./modals/FirstAccessModal.svelte";
    
    $effect(() => {
        if(!appState.alreadyLoaded){
        }
        // showModal(FirstAccessModal, {message: "hello!"})
        showModal(FirstAccessModal, {message: "hello!"})
    })
</script>
<div class="grow relative">
    desktop
    <div>
        {#if appState.isShuttingDown}
            shutting down
        {/if}
    </div>
</div>