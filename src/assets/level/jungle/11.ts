import type Level from "../../../lib/types/Level"
import LevelWorld from "../../../lib/types/LevelWorld";

export default {
    name: "Jungleana Jones",
    winningPoints: 5,
    world: LevelWorld.Jungle,
    lower: {
      "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
      "0": "s s s s s s c s s c s s c s s s",
      "1": "s R R R s s s s s s s s s s R s",
      "2": "s R R R s s s R R s s s s R R s",
      "3": "s R R R s s s s s s s s s s s s",
      "4": "s s . s s s s s s s s s s s s s",
      "5": "s s . s s R s s R s s R s s s s",
      "6": "s s R s s s s s s s s s s s s s",
      "7": "s R R R R R s s s s s s s s s s",
      "8": "s c c c s s s s s s s s s s s s",
      "9": "s R R R s s s R s s R s s R s s",
      "A": "s R R R s s s s s s s s s s s s",
      "B": "s R R R R s s s s s s s s s s s",
      "C": "s R R R R s s s s s s s s s s s",
      "D": "s . . . s s s s s s R R s s s s",
      "E": "s s s s s s s s s s s s s s s s",
      "F": "s s s s s s c s s c s s c s s s"
    },
    higher: {
      "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
      "0": "s s s s s s . s s . s s . s s s",
      "1": "s . . . s s . s s . s s . s B s",
      "2": "s . 5 . s s . . . . s s . . . s",
      "3": "s . . . s s . s s r s s . s s s",
      "4": "s s . s s s . s s . s s . s s s",
      "5": "s s . s s . . s . . s . . s s s",
      "6": "s s . s s s . s s . s s . s s s",
      "7": "s . . . . . . s s . s s . s s s",
      "8": "s . . . s s . s s . s s . s s s",
      "9": "s . . . s s . . s . . s . . s s",
      "A": "s . . b s s . s s . s s . s s s",
      "B": "s B r r . s . s s . s s . s s s",
      "C": "s . . . . s r s s . s s r s s s",
      "D": "s . . . s s . s s . . . . s s s",
      "E": "s . . . . . . s s . s s . s s s",
      "F": "s . p . s s . s s . s s . s s s"
    }
} as Level;
