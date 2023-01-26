import type GridDefinition from "./GridDefinition";

export interface Level {
  winningPoints: number;
  winningText?:  string;

  lower: GridDefinition;
  upper: GridDefinition;
}

export default Level;
