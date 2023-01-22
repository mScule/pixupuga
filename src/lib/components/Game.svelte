<script>
  import Display from "./Display.svelte";
  import Controls from "./Controls.svelte";
  import TileType from "../types/TileType";
  import { createLevel } from "../game/LevelCreator";

  const probabilities = {
    groundSolid: 50,
    wallSolid: 10,
    collectableBox: 5,
    collectableBitOne: 2,
    collectableBitZero: 2,
  };

  let bits = 0;
  let boxes = 0;

  let { player, grid } = createLevel(probabilities);

  function movePlayer(newLocation) {
    if (
      newLocation >= 0 &&
      newLocation < grid.length &&
      grid[newLocation][0] !== TileType.Void &&
      grid[newLocation][0] !== TileType.WallSolid) {
      if (grid[newLocation][1] === TileType.CollectableBitOne)
        bits++;
      if (grid[newLocation][1] === TileType.CollectableBitZero)
        bits += 5;
      if (grid[newLocation][1] === TileType.CollectableBox)
        boxes++;

      grid[player][1] = TileType.Void;
      grid[newLocation][1] = TileType.Player;

      player = newLocation;
    }
  }

  window.addEventListener("keypress", (event) => {
    switch(event.key) {
      case "w": return handleUp();
      case "s": return handleDown();
      case "a": return handleLeft();
      case "d": return handleRight();
    }
  })

  function handleUp() {
    movePlayer(player - 16);
  }

  function handleDown() {
    movePlayer(player + 16);
  }

  function handleLeft() {
    movePlayer(player - 1);
  }

  function handleRight() {
    movePlayer(player + 1);
  }

  function handleAction() {
    console.log("Action");
  }
</script>

<section class="game">
  <Display {bits} {boxes} stacks={grid} />
  <Controls {handleUp} {handleDown} {handleLeft} {handleRight} {handleAction} />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: var(--size-game-width);
    border-radius: var(--size-border-radius);
    height: 70%;
  }
</style>
