import type Level from "../../../lib/types/Level"
import LevelWorld from "../../../lib/types/LevelWorld";

export default {
  name: "Welcome to the Jungle",
  winningPoints: 4,
  world: LevelWorld.Jungle,
  lower: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s s s s s s s s s s s",
    "1": "s s s s s s s s s s s s s s s s",
    "2": "s s s s s s s s s s s s s s s s",
    "3": "s s s s s s s s s s s s s s s s",
    "4": "s s s s s s s s s s s s s s s s",
    "5": "s s s s s s s s s s s s s s s s",
    "6": "s s s s s s s s s s s s s s s s",
    "7": "s s s s s s s . . s s s s s s s",
    "8": "s s s s s s s . s s s s s s s s",
    "9": "s s s s s s s . . s s s s s s s",
    "A": "s s s s s s s . . s s s s s s s",
    "B": "s s s s s s s s s s s s s s s s",
    "C": "s s s s s s s s s s s s s s s s",
    "D": "s s s s s s s s s s s s s s s s",
    "E": "s s s s s s s s s s s s s s s s",
    "F": "s s s s s s s s s s s s s s s s"
  },
  upper: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s s . . s s s s s s s",
    "1": "s s . . . s s . . . . . s s s s",
    "2": "s . r . r . s . . . . . . . s s",
    "3": "s . . . . . s s s . . . s . s s",
    "4": "s . r . r . s s s s . . . . . s",
    "5": "s . . . . . s 1 1 s . . . . . s",
    "6": "s s 1 . 1 . s . . s . s . s . s",
    "7": ". . . . . . s . . s . . . . . .",
    "8": ". . . . . s s . . s s . . . . .",
    "9": "s s s s s s s . . s s s s s s s",
    "A": "s s s s . . . . . . . . s s s s",
    "B": "s s s . . . . . . . . . . s s s",
    "C": "s s s . b . . p . . . b . s s s",
    "D": "s s s . . . . . . . . . . s s s",
    "E": "s s s s . . . . . . . . s s s s",
    "F": "s s s s s s s . . s s s s s s s"
  }
} as Level;
