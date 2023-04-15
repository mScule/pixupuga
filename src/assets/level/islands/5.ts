import type Level from "../../../lib/types/Level"
import LevelWorld from "../../../lib/types/LevelWorld";

export default {
  name: "Boulders!",
  winningPoints: 2,
  world: LevelWorld.Island,
  hint:
    "Once you push a boulder, it keeps going as long as " +
    "it falls into water, or hits a wall, collectable, another boulder or a box. " +
    "You DIE if you try to stop it. " +
    "By stacking two boulders, you can make a bride in water.",
  lower: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": ". . . . . . . . . . . . . . . .",
    "1": ". . . . . . . . . . . . . . . .",
    "2": ". . . . . . . . . . . . . . . .",
    "3": ". . . . . . . . . . . . . . . .",
    "4": ". . . . . . . . . . . . . . . .",
    "5": ". . . . . . . . . s s . . . . .",
    "6": ". . . . . . . . . s s . . . . .",
    "7": ". . . s s s s s s s s . . s . .",
    "8": ". . . . . . . s s s s . . . . .",
    "9": ". . . . . . . ? s s s . . . . .",
    "A": ". . . . . . . . . . r . . . . .",
    "B": ". . . . . . . . . s s . . . . .",
    "C": ". . . . . . . . . s s . . . . .",
    "D": ". . . . . . . . . s s . . . . .",
    "E": ". . . . . . . . . . . . . . . .",
    "F": ". . . . . . . . . . . . . . . ."
  },
  upper: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": ". . . . . . . . . . . . . . . .",
    "1": ". . . . . . . . . . . . . . . .",
    "2": ". . . . . . . . . . . . . . . .",
    "3": ". . . . . . . . . . . . . . . .",
    "4": ". . . . . . . . . . . . . . . .",
    "5": ". . . . . . . . . . . . . . . .",
    "6": ". . . . . . . . . . r . . . . .",
    "7": ". . . p . r . . . . . . . 1 . .",
    "8": ". . . . . . . . b . . . . . . .",
    "9": ". . . . . . . . . . . . . . . .",
    "A": ". . . . . . . . . . . . . . . .",
    "B": ". . . . . . . . . . 1 . . . . .",
    "C": ". . . . . . . . . . r . . . . .",
    "D": ". . . . . . . . . . . . . . . .",
    "E": ". . . . . . . . . . . . . . . .",
    "F": ". . . . . . . . . . . . . . . ."
  }
} as Level;
