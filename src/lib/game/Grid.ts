import Movement      from "../types/Movement";
import type TileGrid from "../types/TileGrid";

const width  = 16;

const getRowOf = (location: number, grid: TileGrid) =>
    Math.floor(location / width);

const getColumnOf = (location: number, grid: TileGrid) =>
    location - getRowOf(location, grid) * width;

function up(location: number, grid: TileGrid): number {
    const newLocation = location - width;

    if (newLocation < 0) {
        return getRowOf(grid.length - 1, grid) * width + getColumnOf(location, grid);
    }

    return newLocation;
}

function down(location: number, grid: TileGrid): number {
    const newLocation = location + width;

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
        return oldRow * width + width - 1;
    }

    return newLocation;
}

function right(location: number, grid: TileGrid): number {
    const newLocation = location + 1;

    const oldRow = getRowOf(location, grid);
    const newRow = getRowOf(newLocation, grid);

    if (oldRow !== newRow) {
        return oldRow * width;
    }

    return newLocation;
}

export const isInsideGrid = (grid: TileGrid, location: number): boolean =>
    location >= 0 && location < grid.length;

export function moveTileInGrid(grid: TileGrid, location: number, movement: Movement): number {
    let newLocation = location;
    let oldLocation = location;

    switch (movement) {
        case Movement.Up:    newLocation = up(location, grid);    break;
        case Movement.Down:  newLocation = down(location, grid);  break;
        case Movement.Left:  newLocation = left(location, grid);  break;
        case Movement.Right: newLocation = right(location, grid); break;
    }

    if (isInsideGrid(grid, newLocation)) {
        return newLocation;
    }

    return oldLocation;
}
