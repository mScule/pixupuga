import type GridDefinition from "./GridDefinition";
import type LevelWorld from "./LevelWorld";
import type Track from "./Track";

export interface Level {
    name: string;
    winningPoints: number;
    winningText?: string;
    /** @deprecated Will be replaced with the type property */
    track?: Track;
    world: LevelWorld;

    lower: GridDefinition;
    upper: GridDefinition;
}

export default Level;
