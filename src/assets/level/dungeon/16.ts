import type Level from "../../../lib/types/Level"
import LevelWorld from "../../../lib/types/LevelWorld";

export default {
  name: "Pacman labyrinth",
  winningPoints: 256,
  winningText: "Thanks for playing!",
  world: LevelWorld.Dungeon,
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
    "8": "s s s s s s s . . s s s s s s s",
    "9": "s s s s s s s . . s s s s s s s",
    "A": "s s s s s s s s s s s s s s s s",
    "B": "s s s s s s s s s s s s s s s s",
    "C": "s s s s s s s s s s s s s s s s",
    "D": "s s s s s s s s s s s s s s s s",
    "E": "s s s s s s s s s s s s s s s s",
    "F": "s s s s s s s s s s s s s s s s"
  },
  higher: {
    "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
    "0": "s s s s s s s s s s s s s s s s",
    "1": "s B 1 5 1 1 5 5 5 5 1 1 5 1 B s",
    "2": "s 1 s 1 s s 1 s s 1 s s 1 s 1 s",
    "3": "s 1 s 1 s s 1 s s 1 s s 1 s 1 s",
    "4": "s 5 1 5 1 1 5 1 1 5 1 1 5 1 5 s",
    "5": "s s s 1 s s s s s s s s 1 s s s",
    "6": "s s s 5 s s s s s s s s 5 s s s",
    "7": ". . . 5 s 5 5 . . 5 5 s 5 . . .",
    "8": ". . . 5 s 5 5 . . 5 5 s 5 . . p",
    "9": "s s s 5 s s s . . s s s 5 s s s",
    "A": "s s s 1 s s s 1 1 s s s 1 s s s",
    "B": "s 5 1 5 1 1 5 5 5 5 1 1 5 1 5 s",
    "C": "s 1 s 1 s s 1 s s 1 s s 1 s 1 s",
    "D": "s 1 s 1 s s 1 s s 1 s s 1 s 1 s",
    "E": "s B 1 5 1 1 5 s s 5 1 1 5 1 B s",
    "F": "s s s s s s s s s s s s s s s s"
  }
} as Level;
