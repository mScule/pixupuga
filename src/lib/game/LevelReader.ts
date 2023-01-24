import type TileGrid from "../types/TileGrid";
import TileType from "../types/TileType";
import createGrid from "./GridCreator";

type GridDefinition = Record<string, string>;

enum LevelAtom {
  Void            = ".",
  Solid           = "s",
  Box             = "b",
  Player          = "p",
  CollectableBox  = "B",
  CollectableOne  = "1",
  CollectableFive = "5",
}

export interface Level {
  winningPoints: number;
  winningText?: string;

  lower: GridDefinition;
  upper: GridDefinition;
}

function definitionToString(definition: Record<string, string>): string {
  const { _, ...lines } = definition;

  let string = "";

  Object.values(lines).map((line) => {
    string += line.replaceAll(" ", "");
  });

  return string;
}

function getLowerTile(atom:LevelAtom): TileType {
    switch(atom) {
        case LevelAtom.Void:  return TileType.Void;
        case LevelAtom.Solid: return TileType.LowerSolid;
        case LevelAtom.Box:   return TileType.LowerBox;
        default: throw new Error(`Bad level atom for lower grid "${atom}"`);
    }
}

function getUpperTile(atom:LevelAtom): TileType {
    switch(atom) {
        case LevelAtom.Void:  return TileType.Void;
        case LevelAtom.Solid: return TileType.UpperSolid;
        case LevelAtom.Box:   return TileType.UpperBox;
    
        case LevelAtom.Player: return TileType.Player;

        case LevelAtom.CollectableBox:  return TileType.CollectableBox;
        case LevelAtom.CollectableOne:  return TileType.CollectablePointOne;
        case LevelAtom.CollectableFive: return TileType.CollectablePointFive;
        default: throw new Error(`Bad level atom for upper grid "${atom}"`);
    }
}

function findPlayer(grid: TileGrid): number {
    let player = 0;

    grid.map((stack, location) => {
        if (stack[1] === TileType.Player)
            player = location;
    });

    return player;
}

function readLevel(level: Level) {
  const grid = createGrid();

  const lower = definitionToString(level.lower);
  const upper = definitionToString(level.upper);

  for (let i = 0; i < grid.length; i++) {
    grid[i][0] = getLowerTile(lower[i] as unknown as LevelAtom);
    grid[i][1] = getUpperTile(upper[i] as unknown as LevelAtom);
  }

  return { player: findPlayer(grid), grid };
}

export default readLevel;
