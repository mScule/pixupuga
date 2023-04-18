import type GridDefinition from "./GridDefinition";
import type LevelWorld     from "./LevelWorld";

export interface Level {
    /** Name of the level. */
    name: string;
    /** Amounts of points required to pass the level. */
    winningPoints: number;
    /** Optional text that will be shown when player passes the level. */
    winningText?: string;
    /** Optional text that will be shown when player walks on a hint tile. */
    hint?: string;
    /** Defines the look of the level. */
    world: LevelWorld;
    /** Grid that contains the lower level tiles for the level. */
    lower: GridDefinition;
    /** Grid that contains the higher level tiles for the level. */
    higher: GridDefinition;
}

export default Level;
