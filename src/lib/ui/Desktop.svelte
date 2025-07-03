<script>
	import { appState } from "$lib/stores/app-store.svelte";

</script>
<div class="grow relative">
    desktop
    <div>
        {#if appState.isShuttingDown}
            shutting down
        {/if}
    </div>
</div>