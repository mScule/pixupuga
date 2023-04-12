import type Level from "../../../lib/types/Level"
import LevelWorld from "../../../lib/types/LevelWorld";

export default {
  name: "Build a bridge",
  winningPoints: 5,
  world: LevelWorld.Island,
  lower: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s s s s s . . . . . .",
    "1": "s s s s s s s s s . . . . . . .",
    "2": "s s s s s s s . . . . . . . . .",
    "3": "s s s s s s . . . . . . . s s s",
    "4": "s s s s s . . . . . . . s s s s",
    "5": "s s s s s . . . . . . . s s s s",
    "6": "s s s s s . . . . . . . s s s s",
    "7": "s s s s s R . . . . . R s s s s",
    "8": "s s s s s . . . . . . . s s s s",
    "9": "s s s s s . . . . . . . s s s s",
    "A": "s s s s s . . . . . . . s s s s",
    "B": "s s s s . . . . . . . . . s s s",
    "C": ". . . . . . . . . . . . . . . .",
    "D": ". . . . . . . . . . . . . . . .",
    "E": ". . s . . . . . . . . . . . . .",
    "F": ". . . . . . . . . . . . . . . ."
  },
  upper: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s s s s . . . . . . .",
    "1": "s . . s . . . . 1 . . . . . . .",
    "2": "s r . r . r . . . . . . . . . .",
    "3": "s . . . . . . . . . . . . . . s",
    "4": "s r . r . . . . . . . . . . 1 s",
    "5": "s . . . . . . . . . . . . . . s",
    "6": "s r . r . . . . . . . . . . b s",
    "7": ". . p . . . . . . . . . . . 1 b",
    "8": "s . . . . . . . . . . . . . s s",
    "9": ". . . . . . . . . . . . . . . s",
    "A": ". r . b . . . . . . . . . . 1 s",
    "B": ". . . . . . . . . . . . . . . s",
    "C": ". . . . . . . . . . . . . . . .",
    "D": ". . . . . . . . . . . . . . . .",
    "E": ". . 1 . . . . . . . . . . . . .",
    "F": ". . . . . . . . . . . . . . . ."
  }
} as Level;
