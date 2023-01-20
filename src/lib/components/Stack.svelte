<script lang="ts">
  import Tile from "./Tile.svelte";
  import TileType from "../types/TileType";
  import type TileStack from "../types/TileStack";

  export let tiles: TileStack = [TileType.Void];
</script>

<figure>
  {#each tiles as type, zIndex}
    <Tile {type} {zIndex} />
  {/each}
</figure>

<style>
  figure {
    display: block;
    position: relative;

    width: var(--size-tile);
    height: var(--size-tile);

    margin: 0;
    padding: 0;
  }
</style>
