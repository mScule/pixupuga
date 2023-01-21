import type TileGrid from "../types/TileGrid";
import TileType from "../types/TileType";

const gridArea: number = 16 * 16;
const groundLevel: number = 0;
const upperLevel: number = 1;

export function initGrid() {
  const grid = Array(gridArea);
  for (let i = 0; i < gridArea; i++) {
    grid[i] = [TileType.Void];
  }
  return grid;
}

function populateGrid(
  grid: TileGrid,
  tileType: TileType,
  level: number,
  percentage: number,
  customCondition?: (groundLevel: TileType, upperLevel: TileType) => boolean
) {
  for (let i = 0; i < gridArea; i++) {
    const probability = Math.random() * 100 <= percentage;

    if (
      customCondition !== undefined
        ? customCondition(
            grid[i][0],
            grid[i][1] ? grid[i][1] : TileType.Void
          ) && probability
        : probability
    ) {
      grid[i][level] = tileType;
    }
  }
}

function insertPlayer(grid: TileGrid) {
  let insertionTrials: number = 10;

  for (let i = 0; i < insertionTrials; i++) {
    const randomLocation = Math.floor(Math.random() * gridArea);
    if (grid[randomLocation][groundLevel] === TileType.GroundSolid) {
      grid[randomLocation][upperLevel] = TileType.Player;
      break;
    }
  }
}

function isTileTypeWalkable(tileType: TileType) {
  return tileType !== TileType.WallSolid && tileType !== TileType.Void;
}

function populateLevel(grid: TileGrid, probabilities: Probabilities) {
  populateGrid(
    grid,
    TileType.GroundSolid,
    0,
    probabilities.groundSolid
  );
  populateGrid(
    grid,
    TileType.WallSolid,
    0,
    probabilities.wallSolid
  );
  populateGrid(
    grid,
    TileType.CollectableBox,
    1,
    probabilities.collectableBox,
    isTileTypeWalkable
  );
  populateGrid(
    grid,
    TileType.CollectableBitOne,
    1,
    probabilities.collectableBitOne,
    isTileTypeWalkable
  );
  populateGrid(
    grid,
    TileType.CollectableBitZero,
    1,
    probabilities.collectableBitZero,
    isTileTypeWalkable
  );
  insertPlayer(grid);
}

interface Probabilities {
  groundSolid: number;
  wallSolid: number;
  collectableBox: number;
  collectableBitOne: number;
  collectableBitZero: number;
}

export function createLevel(probabilities: Probabilities): TileGrid {
  const grid = initGrid();
  populateLevel(grid, probabilities);
  return [...grid];
}
