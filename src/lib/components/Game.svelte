<script>
  import Display from "./Display.svelte";
  import Controls from "./Controls.svelte";
  import { createLevel } from "../game/LevelCreator";

  let grid = createLevel({
    groundSolid: 100,
    wallSolid: 0,
    collectableBox: 0,
    collectableBitOne: 0,
    collectableBitZero: 0,
  });
</script>

<section class="game">
  <Display stacks={grid} />
  <Controls />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: var(--size-game-width);
    border-radius: var(--size-border-radius);
    height: 100%;
  }
  :global(.game > *) {
    margin-bottom: var(--size-buffer-medium);
  }
  :global(.game > *:last-child) {
    margin-bottom: 0;
  }
</style>
