<script lang="ts">
    export let major: number = 0;
    export let minor: number = 0;
    export let patch: number = 0;
</script>

<footer>
    <p>Version: <b>{major}</b>.<b>{minor}</b>.<b>{patch}</b></p>
</footer>

<style>
    footer > p {
        font-size: 0.6rem;
        padding-bottom: var(--size-buffer-small);
    }
</style>
