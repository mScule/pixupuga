import type Level from "../../../lib/types/Level"
import LevelWorld from "../../../lib/types/LevelWorld";

export default {
  name: "Temple",
  winningPoints: 7,
  winningText: "After you take the 5 points, you notice hidden passage beneath you.",
  world: LevelWorld.Jungle,
  lower: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s s s s s s s s s s s",
    "1": "s R R R s . . R R . . . R . R s",
    "2": "R R R R s . . R R . . . R R R R",
    "3": "s R R R s . . . . . . . R . R s",
    "4": "s s s s s . . . . . . s s s s s",
    "5": "s R R R s R R R R R R s . R R s",
    "6": "s R R R R R R R R R . R . R R s",
    "7": "s R R R s R R R R R R s . R R s",
    "8": "s R R R s R R R R R R s c c c s",
    "9": "R R R R s R R R R R R s R R R R",
    "A": "R R R R s . . R R . . s R R R R",
    "B": "s s s s s . . R r . . s s s s s",
    "C": ". . . . . . . . r . . . . . . .",
    "D": "s s s s s s s R R s s s s s s s",
    "E": "s s s s s s s R R s s s s s s s",
    "F": "s s s s s s s R R s s s s s s s"
  },
  upper: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s s s s s s s s s s s",
    "1": "s . . . s . . . 1 . . . . . s s",
    "2": ". . 5 . s . . . . . . . 1 b . .",
    "3": "s . . . s . . . . . . . . . s s",
    "4": "s s s s s . . . . . . s s s s s",
    "5": "s . . . s . . . . . . s . B B s",
    "6": "s . . . . . . . . . . b . B B s",
    "7": "s . . . s . r . . r . s . B B s",
    "8": "s . . . s . . . . . . s . . . s",
    "9": ". . . . s s s . . s s s . . . .",
    "A": ". . . . s . . . . . . s . b . .",
    "B": "s s s s s . . . . . . s s s s s",
    "C": ". . . . . . . . . . . . . . . .",
    "D": ". . . . s . . . . . . . . . . .",
    "E": "r . r . b . . . . . b . r . r .",
    "F": ". . . . s . . . p . . . . . . ."
  }
} as Level;
