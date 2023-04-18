<script lang="ts">
    import { onMount, onDestroy, setContext } from "svelte";

    import Context, { type DJContext } from "../types/Context";
    import { playMusic } from "../stores/SoundSettings";
    import Track from "../types/Track";

    import trackStartScreen from "../../assets/audio/track/start-screen.mp3";
    import trackLevelSelection from "../../assets/audio/track/level-selection.mp3";
    import trackLevelType1 from "../../assets/audio/track/level/1.mp3";
    import trackLevelType2 from "../../assets/audio/track/level/2.mp3";
    import trackLevelType3 from "../../assets/audio/track/level/3.mp3";
    import trackLevelType4 from "../../assets/audio/track/level/4.mp3";
    import LevelWorld from "../types/LevelWorld";

    let nextTrack = trackStartScreen;
    let selectedTrack = trackStartScreen;
    let trackSwitchInterval = null;

    let play = false;
    playMusic.subscribe((value) => (play = value));

    function requestTrack(track: Track) {
        switch (track) {
            case Track.Void:
                return (nextTrack = Track.Void);
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

    function requestTrackByLevelWorld(world: LevelWorld) {
        switch (world) {
            case LevelWorld.Island:
                break;
            case LevelWorld.Jungle:
                break;
            case LevelWorld.Dungeon:
                break;
        }
    }

    function setTrack() {
        if (selectedTrack !== nextTrack) {
            selectedTrack = nextTrack;
        }
    }

    onMount(() => {
        trackSwitchInterval = setInterval(setTrack, 500);
    });
    onDestroy(() => {
        clearInterval(trackSwitchInterval);
        selectedTrack = null;
    });

    setContext<DJContext>(Context.DJ, { requestTrack, requestTrackByLevelWorld });
</script>

<slot />
{#if selectedTrack !== "no-track" && play}
    <audio src={selectedTrack} autoplay loop />
{/if}
