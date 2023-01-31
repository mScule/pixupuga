import type GridDefinition from "./GridDefinition";
import type Track from "./Track";

export interface Level {
    winningPoints: number;
    winningText?: string;
    track: Track;

    lower: GridDefinition;
    upper: GridDefinition;
}

export default Level;
