import TileType from "../types/TileType";

export const isWalkable = (tile: TileType): boolean =>
    tile === TileType.LowerSolid ||
    tile === TileType.LowerBox ||
    tile === TileType.LowerBoxOnTopOfSunkenBoulder ||
    tile === TileType.LowerBoulderAfloat ||
    tile === TileType.LowerTrapSpikesOff ||
    tile === TileType.LowerTrapSpikesOn ||
    tile === TileType.LowerCursed;
