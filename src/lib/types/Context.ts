import type SoundType from "./SoundType";
import type Track from "./Track";

enum Context {
    DJ
}

export interface DJContext {
    requestTrack: (track: Track) => void
}

export default Context;
