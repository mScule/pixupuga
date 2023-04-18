import Movement      from "../types/Movement";
import type TileGrid from "../types/TileGrid";
import { gridWidth } from "./GridCreator";

const getRowOf = (location: number, grid: TileGrid) =>
    Math.floor(location / gridWidth);

const getColumnOf = (location: number, grid: TileGrid) =>
    location - getRowOf(location, grid) * gridWidth;

function up(location: number, grid: TileGrid): number {
    const newLocation = location - gridWidth;

    if (newLocation < 0) {
        return getRowOf(grid.length - 1, grid) * gridWidth + getColumnOf(location, grid);
    }

    return newLocation;
}

function down(location: number, grid: TileGrid): number {
    const newLocation = location + gridWidth;

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
        return oldRow * gridWidth + gridWidth - 1;
    }

    return newLocation;
}

function right(location: number, grid: TileGrid): number {
    const newLocation = location + 1;

    const oldRow = getRowOf(location, grid);
    const newRow = getRowOf(newLocation, grid);

    if (oldRow !== newRow) {
        return oldRow * gridWidth;
    }

    return newLocation;
}

export const isInsideGrid = (grid: TileGrid, location: number): boolean =>
    location >= 0 && location < grid.length;

export function moveHigherTileInGrid(grid: TileGrid, location: number, movement: Movement): number {
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
