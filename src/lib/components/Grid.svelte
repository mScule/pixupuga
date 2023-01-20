<script lang="ts">
  import Stack from "./Stack.svelte";

  import TileType from "../types/TileType";
  import type TileGrid from "../types/TileGrid";

  export let stacks: TileGrid = [[TileType.Void]]
</script>

<section>
  {#each stacks as tiles}
    <Stack {tiles}/>
  {/each}
</section>

<style>
  section {
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(16, auto);
  }
</style>
