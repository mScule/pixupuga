import type TileGrid from "../types/TileGrid";
import TileType      from "../types/TileType";
import range         from "../util/range";

export const gridWidth  = 16;
export const gridHeight = 16;
export const gridArea   = gridWidth * gridHeight;

export function createGrid(): TileGrid {
    const grid = Array(gridArea);

    for (const i of range(gridArea)) {
        grid[i] = [TileType.Void, TileType.Void];
    }

    return grid;
}

export default createGrid
