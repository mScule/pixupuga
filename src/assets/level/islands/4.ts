import type Level from "../../../lib/types/Level"
import LevelWorld from "../../../lib/types/LevelWorld";

export default {
    name: "False friends",
    winningPoints: 6,
    world: LevelWorld.Island,
    hint:
        "Remember to keep an eye on points. " +
        "You only need the amount that's given there but " +
        "maps might have more points than that. If thats the " +
        "case, you need to figure out which ones are meant to be " +
        "collected.",
    lower: {
        "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
        "0": ". . . . . . . . . . . . . . . .",
        "1": ". . s b b b . . . . . . . . . .",
        "2": ". b s b b b . . . . . . . . . .",
        "3": ". . . b b b . . . . . . . . . .",
        "4": ". b . . . b . . . . . . . . . .",
        "5": ". . . . . b s s s s s s s s . .",
        "6": ". b . . . . s s s s s s s s . .",
        "7": ". . . s . . s s s s s s s s . .",
        "8": ". b . s . . s s s s s s s s . .",
        "9": ". . . . . . s s s s . . . . . .",
        "A": ". b . . . . . . . . . . s ? . .",
        "B": ". . . . . . . . s s . . s s . .",
        "C": ". b . s s s s s s s s . s s . .",
        "D": ". . . . . . . . s s s . . s . .",
        "E": ". . . . . . . . . . . . . . . .",
        "F": ". . . . . . . . . . . . . . . ."
    },
    higher: {
        "_": "0 1 2 3 4 5 6 7 8 9 A B C D E F",
        "0": ". . . . . . . . . . . . . . . .",
        "1": ". . . 1 . 1 . . . . . . . . . .",
        "2": ". . . . . . . . . . . . . . . .",
        "3": ". . . 1 . 1 . . . . . . . . . .",
        "4": ". B . . . . . . . . . . . . . .",
        "5": ". . . . . . . . . . . . . . . .",
        "6": ". B . . . . . b b b b b b . . .",
        "7": ". . . s . . . . . . . . . . . .",
        "8": ". B . 5 . . s s s s s s s s . .",
        "9": ". . . . . . 1 . . 1 . . . . . .",
        "A": ". B . . . . . . . . . . . . . .",
        "B": ". . . . . . . . . . . . b . . .",
        "C": ". . . B . . . . . b . . . . . .",
        "D": ". . . . . . . . . . . . . p . .",
        "E": ". . . . . . . . . . . . . . . .",
        "F": ". . . . . . . . . . . . . . . ."
    }
} as Level;
