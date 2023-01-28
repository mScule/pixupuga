import Movement from "../types/Movement";
import type TileGrid from "../types/TileGrid";

export const isInsideGrid = (grid: TileGrid, location: number): boolean =>
    location >= 0 && location < grid.length;

const up = (location: number, grid: TileGrid): number => location - Math.sqrt(grid.length);
const down = (location: number, grid: TileGrid): number => location + Math.sqrt(grid.length);

const left = (location: number): number => location - 1;
const right = (location: number): number => location + 1;

export function moveTileInGrid(grid: TileGrid, location: number, movement: Movement): number {
    let newLocation = location;
    let oldLocation = location;

    switch (movement) {
        case Movement.Up: newLocation = up(location, grid); break;
        case Movement.Down: newLocation = down(location, grid); break;

        case Movement.Left: newLocation = left(location); break;
        case Movement.Right: newLocation = right(location); break;
    }

    if (isInsideGrid(grid, newLocation))
        return newLocation;
    return oldLocation;
}
