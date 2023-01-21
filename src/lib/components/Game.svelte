<script>
  import ScoreBoard from "./ScoreBoard.svelte";
  import Grid from "./Grid.svelte";
  import { initGrid, createLevel } from "../game/LevelCreator";

  let grid = initGrid();
</script>

<section>
  <ScoreBoard bits={0} boxes={20} />
  <Grid stacks={grid} />
  <button
    on:click={() => {
      grid = createLevel({
        groundSolid: 100,
        wallSolid: 0,
        collectableBox: 0,
        collectableBitOne: 0,
        collectableBitZero: 0,
      });
    }}>Init</button>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--size-game-width);
    background-color: var(--color-game);
    padding: var(--size-buffer-medium);
    border-radius: var(--size-border-radius);
  }

  section > * {
    margin-top: var(--size-buffer-medium);
  }
</style>
