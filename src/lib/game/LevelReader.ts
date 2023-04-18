import type TileGrid from "../types/TileGrid";
import type Level    from "../types/Level";
import TileType      from "../types/TileType";
import LevelAtom     from "../types/LevelAtom";
import StackLevel    from "../types/StackLevel";

import range from "../util/range";

import createGrid from "./GridCreator";

function definitionToString(definition: Record<string, string>): string {
    const { _, ...lines } = definition;

    let string = "";

    Object.values(lines).map((line) => {
        string += line.replaceAll(" ", "");
    });

    return string;
}

function getLowerTile(atom: LevelAtom): TileType {
    switch (atom) {
        case LevelAtom.Void:          return TileType.Void;
        case LevelAtom.Solid:         return TileType.LowerSolid;
        case LevelAtom.Box:           return TileType.LowerBox;
        case LevelAtom.Boulder:       return TileType.LowerBoulderSunken;
        case LevelAtom.BoulderAfloat: return TileType.LowerBoulderAfloat;
        case LevelAtom.TrapSpikesOff: return TileType.LowerTrapSpikesOff;
        case LevelAtom.TrapSpikesOn:  return TileType.LowerTrapSpikesOn;
        case LevelAtom.Cursed:        return TileType.LowerCursed;
        case LevelAtom.Hint:          return TileType.LowerHintUnused;

        case LevelAtom.RollerUpOff:    return TileType.LowerRollerUpOff;
        case LevelAtom.RollerUpOn:     return TileType.LowerRollerUpOn;
        case LevelAtom.RollerDownOff:  return TileType.LowerRollerDownOff;
        case LevelAtom.RollerDownOn:   return TileType.LowerRollerDownOn;
        case LevelAtom.RollerLeftOff:  return TileType.LowerRollerLeftOff;
        case LevelAtom.RollerLeftOn:   return TileType.LowerRollerLeftOn;
        case LevelAtom.RollerRightOff: return TileType.LowerRollerRightOff;
        case LevelAtom.RollerRightOn:  return TileType.LowerRollerRightOn;

        default: throw new Error(`Bad level atom for lower grid "${atom}"`);
    }
}

function getHigherTile(atom: LevelAtom): TileType {
    switch (atom) {
        case LevelAtom.Void:    return TileType.Void;
        case LevelAtom.Solid:   return TileType.UpperSolid;
        case LevelAtom.Box:     return TileType.UpperBox;
        case LevelAtom.Boulder: return TileType.UpperBoulder;

        case LevelAtom.Player: return TileType.Player;

        case LevelAtom.CollectableBox:  return TileType.CollectableBox;
        case LevelAtom.CollectableOne:  return TileType.CollectablePointOne;
        case LevelAtom.CollectableFive: return TileType.CollectablePointFive;

        default: throw new Error(`Bad level atom for higher grid "${atom}"`);
    }
}

function findPlayer(grid: TileGrid): number {
    let player = 0;

    grid.map((stack, location) => {
        if (stack[StackLevel.Higher] === TileType.Player) {
            player = location;
        }
    });

    return player;
}

function findTraps(grid: TileGrid): number[] {
    let traps = [];

    grid.forEach((stack, location) => {
        switch (stack[StackLevel.Lower]) {
            case TileType.LowerTrapSpikesOff:
            case TileType.LowerTrapSpikesOn:
                traps.push(location);
                break;
        }
    });

    return traps;
}

function findRollers(grid: TileGrid): number[] {
    let rollers = [];

    grid.forEach((stack, location) => {
        switch (stack[StackLevel.Lower]) {
            case TileType.LowerRollerUpOff:
            case TileType.LowerRollerUpOn:
            case TileType.LowerRollerDownOff:
            case TileType.LowerRollerDownOn:
            case TileType.LowerRollerLeftOff:
            case TileType.LowerRollerLeftOn:
            case TileType.LowerRollerRightOff:
            case TileType.LowerRollerRightOn:
                rollers.push(location);
                break;
        }
    })

    return rollers;
}

function readLevel(level: Level) {
    const grid = createGrid();

    const lower  = definitionToString(level.lower);
    const higher = definitionToString(level.higher);

    for (const i of range(grid.length)) {
        grid[i][StackLevel.Lower]  = getLowerTile(lower[i] as unknown as LevelAtom);
        grid[i][StackLevel.Higher] = getHigherTile(higher[i] as unknown as LevelAtom);
    }

    return {
        playerLocation:  findPlayer(grid),
        trapLocations:   findTraps(grid),
        rollerLocations: findRollers(grid),
        grid
    };
}

export default readLevel;
