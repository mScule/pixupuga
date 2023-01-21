<script lang="ts">
    export let bits: number = 0;
    export let boxes: number = 0;
</script>

<div>
    <h2>Bits: {bits}</h2>
    <h2>Boxes: {boxes}</h2>
</div>

<style>
    div {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    h2 {
        margin: 0;
    }
</style>
