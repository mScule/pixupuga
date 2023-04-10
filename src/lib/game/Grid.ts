import Movement from "../types/Movement";
import type TileGrid from "../types/TileGrid";

export const isInsideGrid = (grid: TileGrid, location: number): boolean =>
    location >= 0 && location < grid.length;

const getRowOf = (location: number, grid: TileGrid) =>
    Math.floor(location / Math.sqrt(grid.length));

const getColumnOf = (location: number, grid: TileGrid) =>
    location - getRowOf(location, grid) * Math.sqrt(grid.length);

function up(location: number, grid: TileGrid): number {
    const newLocation = location - Math.sqrt(grid.length);

    if (newLocation < 0) {
        return getRowOf(grid.length - 1, grid) * Math.sqrt(grid.length) + getColumnOf(location, grid);
    }

    return newLocation;
}
function down(location: number, grid: TileGrid): number {
    const newLocation = location + Math.sqrt(grid.length);

    if (newLocation >= grid.length) {
        return getColumnOf(location, grid);
    }

    return newLocation;
}
function left(location: number, grid: TileGrid): number {
    const newLocation = location - 1;

    const oldRow = getRowOf(location, grid);
    const newRow = getRowOf(newLocation, grid);

    if (oldRow !== newRow) {
        return oldRow * Math.sqrt(grid.length) + (Math.sqrt(grid.length) - 1);
    }

    return newLocation;
}
function right(location: number, grid: TileGrid): number {
    const newLocation = location + 1;

    const oldRow = getRowOf(location, grid);
    const newRow = getRowOf(newLocation, grid);

    if (oldRow !== newRow) {
        return oldRow * Math.sqrt(grid.length);
    }

    return newLocation;
}

export function moveTileInGrid(grid: TileGrid, location: number, movement: Movement): number {
    let newLocation = location;
    let oldLocation = location;

    switch (movement) {
        case Movement.Up: newLocation = up(location, grid); break;
        case Movement.Down: newLocation = down(location, grid); break;

        case Movement.Left: newLocation = left(location, grid); break;
        case Movement.Right: newLocation = right(location, grid); break;
    }

    if (isInsideGrid(grid, newLocation))
        return newLocation;
    return oldLocation;
}
