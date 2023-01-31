<script lang="ts">
    import { onMount, onDestroy, setContext } from "svelte";

    import Context, { type DJContext } from "../types/Context";
    import Track from "../types/Track";

    import trackStartScreen from "../../assets/audio/track/start-screen.mp3";
    import trackLevelSelection from "../../assets/audio/track/level-selection.mp3";
    import trackLevelType1 from "../../assets/audio/track/level/1.mp3";
    import trackLevelType2 from "../../assets/audio/track/level/2.mp3";
    import trackLevelType3 from "../../assets/audio/track/level/3.mp3";
    import trackLevelType4 from "../../assets/audio/track/level/4.mp3";

    let nextTrack = trackStartScreen;
    let selectedTrack = trackStartScreen;
    let trackSwitchInterval = null;
    let dj;

    function requestTrack(track: Track) {
        switch (track) {
            case Track.StartScreen:
                return (nextTrack = trackStartScreen);
            case Track.LevelSelection:
                return (nextTrack = trackLevelSelection);
            case Track.LevelType1:
                return (nextTrack = trackLevelType1);
            case Track.LevelType2:
                return (nextTrack = trackLevelType2);
            case Track.LevelType3:
                return (nextTrack = trackLevelType3);
            case Track.LevelType4:
                return (nextTrack = trackLevelType4);
        }
    }

    setContext<DJContext>(Context.DJ, { requestTrack });

    function setTrack() {
        if (selectedTrack !== nextTrack) {
            selectedTrack = nextTrack;
        }
    }

    onMount(() => {
        trackSwitchInterval = setInterval(setTrack, 2000);
    });
    onDestroy(() => {
        clearInterval(trackSwitchInterval);
        selectedTrack = null;
    });
</script>

<slot />

<audio src={selectedTrack} bind:this={dj} autoplay loop />
