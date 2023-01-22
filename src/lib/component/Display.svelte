<script lang="ts">
  import ScoreBoard from "./ScoreBoard.svelte";
  import Grid from "./Grid.svelte";
  import type TileGrid from "../types/TileGrid";

  export let points: number;
  export let boxes: number;

  export let stacks: TileGrid;
</script>

<section class="display">
  <ScoreBoard {points} {boxes} />
  <Grid {stacks} />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--size-game-width);
    border-radius: var(--size-border-radius);
    padding: var(--size-buffer-medium) 0 var(--size-buffer-medium) 0;
    background-color: var(--color-game);
  }
  :global(.display > *) {
    margin-bottom: var(--size-buffer-medium);
  }
  :global(.display > *:last-child) {
    margin-bottom: 0;
  }
</style>
