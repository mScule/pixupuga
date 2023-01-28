<script lang="ts">
  import type Level from "../types/Level";

  import TileType from "../types/TileType";
  import Movement from "../types/Movement";

  import GameDisplay from "./GameDisplay.svelte";
  import Title from "./Title.svelte";
  import Controls from "./Controls.svelte";

  import { isInsideGrid, moveTileInGrid } from "../game/Grid";
  import { isWalkable } from "../game/Tile";

  import readLevel from "../game/LevelReader";
  import StackLevel from "../types/StackLevel";

  export let title: string;
  export let level: Level;

  export let handleWinning: () => void;
  export let handleExit: () => void;

  const winningPoints = level.winningPoints;

  let { player, grid } = readLevel(level);
  let lastMovement: Movement = Movement.None;

  let points = 0;
  let boxes = 0;

  const getLowerTileAt = (location: number): TileType =>
    isInsideGrid(grid, location)
      ? grid[location][StackLevel.Lower]
      : TileType.Void;

  function setLowerTileAt(location: number, tile: TileType) {
    if (isInsideGrid(grid, location)) grid[location][StackLevel.Lower] = tile;
  }

  const getHigherTileAt = (location: number): TileType =>
    isInsideGrid(grid, location)
      ? grid[location][StackLevel.Higher]
      : TileType.Void;

  function setHigherTileAt(location: number, tile: TileType) {
    if (isInsideGrid(grid, location)) grid[location][StackLevel.Higher] = tile;
  }

  function movePlayer(movement: Movement) {
    const newLocation = moveTileInGrid(grid, player, movement);
    lastMovement = movement;

    const handleBoxInteraction = () => {
      const newBoxLocation = moveTileInGrid(grid, newLocation, movement);

      const newLocationIsOutsideGrid = () => newBoxLocation === newLocation;

      const tileIsNotVoidAt = (location: number) =>
        getHigherTileAt(location) !== TileType.Void;

      if (newLocationIsOutsideGrid() || tileIsNotVoidAt(newBoxLocation)) return;
      else if (getLowerTileAt(newBoxLocation) === TileType.Void)
        setLowerTileAt(newBoxLocation, TileType.LowerBox);
      else setHigherTileAt(newBoxLocation, TileType.UpperBox);
    };

    if (
      isWalkable(getLowerTileAt(newLocation)) &&
      getHigherTileAt(newLocation) !== TileType.UpperSolid
    ) {
      if (getHigherTileAt(newLocation) === TileType.UpperBox)
        return handleBoxInteraction();

      if (getLowerTileAt(player) === TileType.LowerBox)
        setLowerTileAt(player, TileType.Void);

      if (getHigherTileAt(newLocation) === TileType.CollectablePointOne)
        points++;

      if (getHigherTileAt(newLocation) === TileType.CollectablePointFive)
        points += 5;

      if (getHigherTileAt(newLocation) === TileType.CollectableBox) boxes++;

      setHigherTileAt(player, TileType.Void);
      setHigherTileAt(newLocation, TileType.Player);

      player = newLocation;
    }
  }

  function spawnBox() {
    if (lastMovement !== Movement.None && boxes > 0) {
      const spawnPosition = moveTileInGrid(grid, player, lastMovement);
      if (
        isInsideGrid(grid, spawnPosition) &&
        getHigherTileAt(spawnPosition) === TileType.Void &&
        (getLowerTileAt(spawnPosition) === TileType.LowerSolid ||
          getLowerTileAt(spawnPosition) === TileType.Void)
      ) {
        boxes--;

        if (getLowerTileAt(spawnPosition) === TileType.Void)
          setLowerTileAt(spawnPosition, TileType.LowerBox);
        else setHigherTileAt(spawnPosition, TileType.UpperBox);
      }
    }
  }

  const handleUp = () => movePlayer(Movement.Up);
  const handleDown = () => movePlayer(Movement.Down);
  const handleLeft = () => movePlayer(Movement.Left);
  const handleRight = () => movePlayer(Movement.Right);

  function handleActionPrimary() {
    if (points < winningPoints) spawnBox();
    else handleWinning();
  }

  const handleActionSecondary = () => handleExit();
</script>

<GameDisplay
  {title}
  {points}
  {boxes}
  {winningPoints}
  winningText={level.winningText}
  stacks={grid}
/>
<Title {title} />
<Controls
  {handleUp}
  {handleDown}
  {handleLeft}
  {handleRight}
  {handleActionPrimary}
  handleActionSecondary={points < winningPoints ? handleActionSecondary : null}
/>
