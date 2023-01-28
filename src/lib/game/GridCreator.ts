import type TileGrid from "../types/TileGrid";
import TileType from "../types/TileType";

const gridArea: number = 16 * 16;

export function createGrid(): TileGrid {
    const grid = Array(gridArea);
    for (let i = 0; i < gridArea; i++) {
        grid[i] = [TileType.Void, TileType.Void];
    }
    return grid;
}

export default createGrid
