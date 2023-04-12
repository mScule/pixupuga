import type Level from "../../../lib/types/Level";
import LevelWorld from "../../../lib/types/LevelWorld";

export default {
    name: "Floating BOX arithmetics",
    winningPoints: 4,
    track: "no-track",
    world: LevelWorld.Island,
    lower: {
        "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
        "0": ". . . . . . . . . . . . . . . .",
        "1": ". . . . . . . . . . . . . . . .",
        "2": ". . . . . . . . . . . . . . . .",
        "3": ". . . . . . . . s s . s s . . .",
        "4": ". . . . . . . . s s . s s . . .",
        "5": ". . . . . s s . s s . s s . . .",
        "6": ". . . . . s s . . . . b . . . .",
        "7": ". . . s s s s . s s s s s . . .",
        "8": ". . . . . . . . s s s s s . . .",
        "9": ". . . . . . . . s s s s s . . .",
        "A": ". . . . . . . . . . s s . . . .",
        "B": ". . . . . . . . . s . . . . . .",
        "C": ". . . . . . . . . . . . . . . .",
        "D": ". . . . . . . . . s . . . . . .",
        "E": ". . . . . . . . . . . . . . . .",
        "F": ". . . . . . . . . . . . . . . ."
    },
    upper: {
        "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
        "0": ". . . . . . . . . . . . . . . .",
        "1": ". . . . . . . . . . . . . . . .",
        "2": ". . . . . . . . . . . . . . . .",
        "3": ". . . . . . . . . . . . . . . .",
        "4": ". . . . . . . . 1 b . b 1 . . .",
        "5": ". . . . . . . . . . . . . . . .",
        "6": ". . . . . . b . . . . . . . . .",
        "7": ". . . p . . . . 1 . . . . . . .",
        "8": ". . . . . . . . s . b . . . . .",
        "9": ". . . . . . . . . . . . s . . .",
        "A": ". . . . . . . . . . . . . . . .",
        "B": ". . . . . . . . . . . . . . . .",
        "C": ". . . . . . . . . . . . . . . .",
        "D": ". . . . . . . . . 1 . . . . . .",
        "E": ". . . . . . . . . . . . . . . .",
        "F": ". . . . . . . . . . . . . . . ."
    }
} as Level;
