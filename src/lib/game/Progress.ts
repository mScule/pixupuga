import boolean from "../parse/boolean";

const levelKey = (levelIndex: number): string => `level-${levelIndex}`;

export function setLevelOpen(levelIndex: number) {
    localStorage.setItem(levelKey(levelIndex), boolean.toString(true));
}

export function isLevelOpen(levelIndex: number) {
    return levelIndex === 0 || boolean.fromString(localStorage.getItem(levelKey(levelIndex)));
}
