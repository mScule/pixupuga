import SoundCollectablePointOne from "../../assets/audio/collectable/point/1.mp3";
import SoundCollectablePointFive from "../../assets/audio/collectable/point/5.mp3";
import SoundCollectableBoxCollect from "../../assets/audio/collectable/box/collect.mp3";
import SoundCollectableBoxPlace from "../../assets/audio/collectable/box/place.mp3";

import SoundHigherBoulder from "../../assets/audio/higher/boulder.mp3";
import SoundHigherBox from "../../assets/audio/higher/box.mp3";
import SoundHigherDestruction from "../../assets/audio/higher/destruction.mp3";
import SoundHigherHit from "../../assets/audio/higher/hit.mp3";

import SoundLevelLose from "../../assets/audio/level/lose.mp3";
import SoundLevelWin from "../../assets/audio/level/win.mp3";

import SoundLowerTrapSpikesUp from "../../assets/audio/lower/trap-spikes/up.mp3";
import SoundLowerTrapSpikesDown from "../../assets/audio/lower/trap-spikes/down.mp3";
import SoundLowerHit from "../../assets/audio/lower/hit.mp3";

import SoundType from "../types/SoundType";

function getSound(type: SoundType): string {
    switch (type) {
        case SoundType.CollectablePointOne:
            return SoundCollectablePointOne;
        case SoundType.CollectablePointFive:
            return SoundCollectablePointFive;
        case SoundType.CollectableBoxCollect:
            return SoundCollectableBoxCollect;
        case SoundType.CollectableBoxPlace:
            return SoundCollectableBoxPlace;

        case SoundType.HigherBoulder:
            return SoundHigherBoulder;
        case SoundType.HigherBox:
            return SoundHigherBox;
        case SoundType.HigherDestruction:
            return SoundHigherDestruction;
        case SoundType.HigherHit:
            return SoundHigherHit;

        case SoundType.LevelLose:
            return SoundLevelLose;
        case SoundType.LevelWin:
            return SoundLevelWin;

        case SoundType.LowerTrapSpikesUp:
            return SoundLowerTrapSpikesUp;
        case SoundType.LowerTrapSpikesDown:
            return SoundLowerTrapSpikesDown;

        case SoundType.LowerHit:
            return SoundLowerHit;
    }
}

function playSound(type: SoundType) {
    const sound = new Audio(getSound(type));
    sound.play();
}

export default playSound;
