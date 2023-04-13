import type Level from "../../../lib/types/Level"
import LevelWorld from "../../../lib/types/LevelWorld";

export default {
  name: "Garbage collector",
  winningPoints: 10,
  world: LevelWorld.Dungeon,
  lower: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s s s s s s s s s s s",
    "1": "s s s s s s s s s s s s s s s s",
    "2": "s s s s s s s s s s s s s s s s",
    "3": "s s s s s s s s s s s s s s s s",
    "4": "s s s s s s s s s s s s s s s s",
    "5": "s l L l L l L l L l L L l l T s",
    "6": "s L l L l L l L l L l l L L t s",
    "7": "s l L l L l L l L l L L l l T s",
    "8": "s L l L l L l L l L l l L L t s",
    "9": "s l L l L l L l L l L L l l T s",
    "A": "s L l L l L l L l L l l L L t s",
    "B": "s s s s s s s s s s s s s s s s",
    "C": "s s s s s s s s s s s . . s s s",
    "D": "s s s s s s s s s s s . . s s s",
    "E": "s s s s s s s s s s s . . s s s",
    "F": "s s s s s s s s s s s s s s s s"
  },
  upper: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s s s s s s s s s s s",
    "1": "s . . . . s . . . . . . . . . s",
    "2": "s . . b . s . . . . . . . p . s",
    "3": "s . . . . s . . . . . . . . . s",
    "4": "s . s s s s s . s s s s s s s s",
    "5": "s . . . . . . . . . . . . . . s",
    "6": "s . . 1 . . . . . . . . 1 . . s",
    "7": "s . . 1 . . . . . . . . 1 . . s",
    "8": "s . . 1 . . . . . . . . 1 . . s",
    "9": "s . . 1 . . . . . . . . 1 . . s",
    "A": "s . . . . . . . . . . . . . . s",
    "B": "s . s s s s s . s s s s s s s s",
    "C": "s . . . . s . . . . . . . . 1 s",
    "D": "s . . b . s . . . . . . . . . s",
    "E": "s . . . . s . . . . . . . . 1 s",
    "F": "s s s s s s s s s s s s s s s s"
  }
} as Level;
