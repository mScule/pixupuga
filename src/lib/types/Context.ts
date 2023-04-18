import type Track      from "./Track";
import type SoundType  from "./SoundType";
import type LevelWorld from "./LevelWorld";

enum Context {
    DJ,
    SoundPlayer
}

export interface DJContext {
    requestTrack: (track: Track) => void,
    requestTrackByLevelWorld: (world: LevelWorld) => void
}

export interface SoundPlayerContext {
    playSound: (type: SoundType) => void
}

export default Context;
