<script lang="ts">
    import isFullscreenEnabled from "../settings/Fullscreen";
    export let title: string = "";
</script>

{#if !isFullscreenEnabled()}
    <header>
        <h1>{title}</h1>
    </header>
{/if}

<style>
    h1 {
        filter: var(--drop-shadow);
    }
</style>
