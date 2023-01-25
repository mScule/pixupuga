<script lang="ts">
  import Stack from "./Stack.svelte";

  import TileType from "../types/TileType";
  import type TileGrid from "../types/TileGrid";

  export let stacks: TileGrid = [[TileType.Void]];
</script>

<section>
  {#each stacks as tiles}
    <Stack {tiles} />
  {/each}
</section>

<style>
  section {
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(16, auto);

    background: url(../../assets/img/16x16/background/water.gif);
    background-size: calc(var(--size-tile) * 2);
    image-rendering: pixelated;

    animation-name: water;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
</style>
