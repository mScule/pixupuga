import type Level from "../../../lib/types/Level"
import LevelWorld from "../../../lib/types/LevelWorld";

export default {
  name: "Cursed village",
  winningPoints: 12,
  world: LevelWorld.Jungle,
  lower: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s s . . s s s s s s s",
    "1": "s s s s s s s . . s s s s s s s",
    "2": "s s s s . s s . . s s . s s s s",
    "3": "s s s R R R s R R s R R R s s s",
    "4": "s s s R R R s R R s R R R s s s",
    "5": "s s s c c c s R R s c c c s s s",
    "6": "s s s s s s s s s s s s s s s s",
    "7": "s s s s s s s s s s s s s s s s",
    "8": "s s s s s s s s s s s s s s s s",
    "9": "s s s s s R R R R R R s s s s s",
    "A": "s c c c c c . . . . c c c c c s",
    "B": "s s s s s R R R R R R s s s s s",
    "C": "s s s s s s s s s s s s s s s s",
    "D": "s s s s s s s s s s s s s s s s",
    "E": "s s s s s s s s s s s s s s s s",
    "F": "s s s s s s s s s s s s s s s s"
  },
  upper: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s s . . s s s s s s s",
    "1": ". . . . . . s . . s . . . . . .",
    "2": ". . s s . s s . . s s . s s . .",
    "3": ". . s 1 . 1 s . . s 1 . 1 s . .",
    "4": ". . s 1 . 1 s 1 1 s 1 . 1 s . .",
    "5": ". . s . . . s 1 1 s . . . s . .",
    "6": ". . s . . . s s s s . . . s . .",
    "7": ". . . . . . . . . . . . b . . .",
    "8": ". . . r . r . . . . . . . . . .",
    "9": ". . . . . . . . . . . . . . . .",
    "A": "s . . . . . . . . . . . . . . s",
    "B": "s . . . . . . . . . . . . . . s",
    "C": "s s . r . . b . . b . . r . s s",
    "D": "s s . r . . r p . r . . r . s s",
    "E": "s s s . . . . . . . . . . s s s",
    "F": "s s s s s s s . . s s s s s s s"
  }
} as Level;
