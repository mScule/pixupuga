import type Level from "../../../lib/types/Level"
import LevelWorld from "../../../lib/types/LevelWorld";

export default {
  name: "Cursed room",
  winningPoints: 2,
  world: LevelWorld.Dungeon,
  lower: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s s s s s s s s s s s",
    "1": "s s s s t s s s s s s T s s s s",
    "2": "s s s s s s s s s s s s s s s s",
    "3": "s s s s s s s s s s s s s s s s",
    "4": "s t s s s l s s s s h s s s t s",
    "5": "s s s s j c c c c c c j s s s s",
    "6": "s s s s s c c c c c c s s s s s",
    "7": "s s s s s c c c c c c s s s s s",
    "8": "s s s s s c c c c c c s s s s s",
    "9": "s s s s s c c c c c c s s s s s",
    "A": "s s s s k c c c c c c k s r s s",
    "B": "s T s s s l s s s s h s s r s s",
    "C": "s s s s s s s s s s s s s s s s",
    "D": "s s s s s s s s s s r r s s s s",
    "E": "s s s s t s s s s s s s s s s s",
    "F": "s s s s s s s s s s s s s s s s"
  },
  upper: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s s s s s s s s s s s",
    "1": "s p . . . . . . . . . . . . . s",
    "2": "s . . . s . . . . . . s . b . s",
    "3": "s . . . s . r . . r . s . . . s",
    "4": "s . s s s r . . . . . s s s . s",
    "5": "s . . . . . . . . . . r s . . s",
    "6": "s . . r . . . . . . . . s . . s",
    "7": "s . . . . . . . . . . . s . . s",
    "8": "s . . . . . . . . . . . . . . s",
    "9": "s . . r . . . . . . . . . . . s",
    "A": "s . . . r . . . . . . . s . s s",
    "B": "s . s s s . . . . . r s s . . s",
    "C": "s . . . s s s s . . s s s s . s",
    "D": "s . b . s . . . . . . . s s 1 s",
    "E": "s . . . . . . . . . s . . 1 s s",
    "F": "s s s s s s s s s s s s s s s s"
  }
} as Level;
