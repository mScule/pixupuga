<!--TODO: Refactor into smaller core files inside the game folder-->

<script lang="ts">
  import type Level from "../types/Level";

  import TileType from "../types/TileType";
  import Movement from "../types/Movement";

  import GameDisplay from "./GameDisplay.svelte";
  import Title       from "./Title.svelte";
  import Controls    from "./Controls.svelte";

  import readLevel from "../game/LevelReader";

  export let title: string;
  export let level: Level;
  export let handleWinning: () => void;
  export let handleExit:    () => void;

  let points = 0;
  let boxes  = 0;
  let winningPoints = level.winningPoints;

  let { player, grid } = readLevel(level);

  let lastMovement: Movement = Movement.None;

  const getLower = (location: number): TileType =>
    isInsideGrid(location) ? grid[location][0] : TileType.Void;
  const getUpper = (location: number): TileType =>
    isInsideGrid(location) ? grid[location][1] : TileType.Void;

  function setLower(location: number, tile: TileType) {
    if (isInsideGrid(location)) grid[location][0] = tile;
  }
  function setUpper(location: number, tile: TileType) {
    if (isInsideGrid(location)) grid[location][1] = tile;
  }

  function move(location: number, movement: Movement): number {
    let newLocation = location;
    let oldLocation = location;

    switch (movement) {
      case Movement.Up:
        newLocation = location - 16;
        break;
      case Movement.Down:
        newLocation = location + 16;
        break;

      case Movement.Left:
        newLocation = location - 1;
        break;
      case Movement.Right:
        newLocation = location + 1;
        break;
    }

    if (isInsideGrid(newLocation)) return newLocation;
    return oldLocation;
  }

  function isWalkable(tile: TileType): boolean {
    switch (tile) {
      case TileType.LowerSolid:
      case TileType.LowerBox:
        return true;
      default:
        return false;
    }
  }

  function isInsideGrid(location: number) {
    return location >= 0 && location < grid.length;
  }

  function movePlayer(movement: Movement) {
    const newLocation = move(player, movement);
    lastMovement = movement;

    if (
      isWalkable(getLower(newLocation)) &&
      getUpper(newLocation) !== TileType.UpperSolid
    ) {
      if (getUpper(newLocation) === TileType.UpperBox) {
        const boxNewLocation = move(newLocation, movement);
        if (boxNewLocation === newLocation) {
          return;
        } else if (getLower(boxNewLocation) === TileType.Void) {
          setLower(boxNewLocation, TileType.LowerBox);
        } else if (getUpper(boxNewLocation) !== TileType.Void) {
          return;
        } else {
          setUpper(boxNewLocation, TileType.UpperBox);
        }
      }

      if (getLower(player) === TileType.LowerBox) {
        setLower(player, TileType.Void);
      }
      if (getUpper(newLocation) === TileType.CollectablePointOne) {
        points++;
      }
      if (getUpper(newLocation) === TileType.CollectablePointFive) {
        points += 5;
      }
      if (getUpper(newLocation) === TileType.CollectableBox) {
        boxes++;
      }

      setUpper(player, TileType.Void);
      setUpper(newLocation, TileType.Player);

      player = newLocation;
    }
  }

  function spawnBox() {
    if (lastMovement !== Movement.None && boxes > 0) {
      const spawnPosition = move(player, lastMovement);
      if (
        isInsideGrid(spawnPosition) &&
        getUpper(spawnPosition) === TileType.Void &&
        (getLower(spawnPosition) === TileType.LowerSolid ||
          getLower(spawnPosition) === TileType.Void)
      ) {
        boxes--;
        if (getLower(spawnPosition) === TileType.Void) {
          setLower(spawnPosition, TileType.LowerBox);
        } else {
          setUpper(spawnPosition, TileType.UpperBox);
        }
      }
    }
  }

  const handleUp    = () => movePlayer(Movement.Up);
  const handleDown  = () => movePlayer(Movement.Down);
  const handleLeft  = () => movePlayer(Movement.Left);
  const handleRight = () => movePlayer(Movement.Right);

  function handleActionPrimary() {
    if (points < winningPoints)
      spawnBox();
    else
      handleWinning();
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
