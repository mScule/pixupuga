<script lang="ts">
  import TileType from "../types/TileType";
  import type TileGrid from "../types/TileGrid";

  import Stack from "./Stack.svelte";

  export let stacks: TileGrid = [[TileType.Void, TileType.Void]];
</script>

<section>
  {#each stacks as tiles}
    <Stack {tiles} />
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(16, auto);

    width: fit-content;

    background: url(../../assets/img/16x16/background/water.gif);
    background-size: calc(var(--size-tile) * 2);
    image-rendering: pixelated;

    animation-name: water;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
</style>
