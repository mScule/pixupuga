<script>
  import Display from "./Display.svelte";
  import Controls from "./Controls.svelte";
  import { createLevel } from "../game/LevelCreator";

  const probabilities = {
    groundSolid: 80,
    wallSolid: 10,
    collectableBox: 5,
    collectableBitOne: 1,
    collectableBitZero: 1,
  };

  let grid = createLevel(probabilities);
</script>

<section class="game">
  <h1>{"16 BYTES"}</h1>
  <Display stacks={grid} />
  <Controls
    handleUp={() => {
      console.log("Up");
    }}
    handleDown={() => {
      console.log("Down");
    }}
    handleLeft={() => {
      console.log("Left");
    }}
    handleRight={() => {
      console.log("Right");
    }}
    handleAction={() => {
      console.log("Action");
    }}
  />
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
</style>
