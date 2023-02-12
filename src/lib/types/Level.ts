import type GridDefinition from "./GridDefinition";
import type Track from "./Track";

export interface Level {
    winningPoints: number;
    winningText?: string;
    /** @deprecated Will be replaced with the type property */
    track?: Track;
    type: "island" | "dungeon" | "jungle"

    lower: GridDefinition;
    upper: GridDefinition;
}

export default Level;
