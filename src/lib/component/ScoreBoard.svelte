<script lang="ts">
    export let points:        number = 0;
    export let winningPoints: number = 0;
    export let boxes:         number = 0;
</script>

<div>
    <h2>Points: {points}/{winningPoints}</h2>
    <h2>Boxes: {boxes}</h2>
</div>

<style>
    div {
        display:         flex;
        justify-content: space-around;

        width: 100%;
    }
    h2 {
        margin: 0;
    }
</style>
