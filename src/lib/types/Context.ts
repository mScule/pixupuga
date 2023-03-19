import type Track from "./Track";
import type SoundType from "./SoundType";

enum Context {
    DJ,
    SoundPlayer
}

export interface DJContext {
    requestTrack: (track: Track) => void
}

export interface SoundPlayerContext {
    playSound: (type: SoundType) => void
}

export default Context;
