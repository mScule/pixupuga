import type Track from "./Track";
import type SoundType from "./SoundType";
import type LevelWorld from "./LevelWorld";
import type { SwitchExpressionDefault } from "../expression/switchExpression";

enum Context {
    DJ,
    SoundPlayer,
    Background
}

export interface DJContext {
    requestTrack: (track: Track) => void
}

export interface SoundPlayerContext {
    playSound: (type: SoundType) => void
}

export interface BackgroundContext {
    setBackground: (type: LevelWorld | SwitchExpressionDefault) => void
}

export default Context;
