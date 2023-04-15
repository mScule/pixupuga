import type Level from "../../../lib/types/Level"
import LevelWorld from "../../../lib/types/LevelWorld";

export default {
  name: "The dungeon enterance",
  winningPoints: 4,
  world: LevelWorld.Dungeon,
  hint:
    "Those things that comes from ground and goes back in are spikes and you die " +
    "If you walk on them when they are up. You can also break boxes, boulders etc with them. " +
    "Those pulsating arrows are rollers. They move things automatically to the pointed direction.",
  lower: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s s s s s s s s s s s",
    "1": "s s s s s s s s s s s s s s s s",
    "2": "s s s s s s r s s s s s s s s s",
    "3": "s s s s s s s s s s s s s s s s",
    "4": "s s s s s s s s s s s s s s s s",
    "5": "s s s s s s s s s s s s s s s s",
    "6": "s s s ? s k s s s s s s s s s s",
    "7": "s s s s t s s s s r . r . s s s",
    "8": "s s s s t s s s s r . r . s s s",
    "9": "s s s s s j s s s s s s s s s s",
    "A": "s s s s s s s s s s s s s s s s",
    "B": "s s s s s s s s s s s s s s s s",
    "C": "s s s s s s s s s s s s s s s s",
    "D": "s s s s s s r s s s s s s s s s",
    "E": "s s s s s s s s s s s s s s s s",
    "F": "s s s s s s s s s s s s s s s s"
  },
  upper: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s . s s s s s s s s s s",
    "1": "s s s s s . s s s s s s s s s s",
    "2": "s s s s . . . . 1 s s s s s s s",
    "3": "s s s s s . s r s s s s s s s s",
    "4": "s s s s s . . . . . s s s s s s",
    "5": "s s s s s . . . . . s s . . . s",
    "6": "s . . . s . r . b . s s . 1 . s",
    "7": "s p . . . . . . . . . . . . . s",
    "8": "s . . . . . . . . . . . . . . s",
    "9": "s . . . s . r . b . s s . 1 . s",
    "A": "s s s s s . . . . . s s . . . s",
    "B": "s s s s s . . . . . s s s s s s",
    "C": "s s s s s . s r s s s s s s s s",
    "D": "s s s s . . . . 1 s s s s s s s",
    "E": "s s s s s . s s s s s s s s s s",
    "F": "s s s s s . s s s s s s s s s s"
  }
} as Level;
