import type Level from "../../../lib/types/Level"
import LevelWorld from "../../../lib/types/LevelWorld";

export default {
  winningPoints: 8,
  world: LevelWorld.Island,
  lower: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s . . . . s s s s s s",
    "1": "s s s s s s . . . . s s s s s s",
    "2": "s s s s s b b b b b b s s s s s",
    "3": "s s s s s s . . . . s s s s s s",
    "4": "s s s s s s . . . . s s s s s s",
    "5": "s s s s s s . . . . s s s s s s",
    "6": "s s s s s s . . . . s s s s s s",
    "7": "s s s s s b b b b b b s s s s s",
    "8": "s s s s s s . . . . s s s s s s",
    "9": "s s s s s s . . . . s s s s s s",
    "A": "s s . s s s . . . . s s s s s s",
    "C": "s s s s s s . . . . s s s s s s",
    "D": "s s s s s s . s . . s s s s s s",
    "E": "s s s s s s . . . . s s s s s s",
    "B": "s s s s s s . . . . s s s s s s",
    "F": "s s s s s s . . . . s s s s s s"
  },
  upper: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s . . . . s s s s s s",
    "1": "s . p . . s . . . . s . . . . s",
    "2": "s . b r . . . . . . . . . . 1 s",
    "3": "s . . . . s . . . . s . . . . s",
    "4": "s . . . . s . . . . s . . . . s",
    "5": "s s s s s s . . . . s s s . s s",
    "6": "s . . . . s . . . . s . . . . s",
    "7": "s . . . . . . . . . . . r . . s",
    "8": "s . 1 r . s . . . . s . . 1 . s",
    "9": "s . r . . s . . . . s s s s s s",
    "A": "s s . s s s . . . . s . . . . s",
    "B": "s . . . . s . . . . s . r r . s",
    "C": "s . 1 1 . s . 1 . . . . . . . s",
    "D": ". . . . . s . . . . s . 1 1 . .",
    "E": "s . . . . s . . . . s . . . . s",
    "F": "s s s s s s . . . . s s s s s s"
  }
} as Level;
