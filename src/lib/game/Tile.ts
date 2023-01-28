import TileType from "../types/TileType";

export const isWalkable = (tile: TileType): boolean =>
    tile === TileType.LowerSolid || tile === TileType.LowerBox;
