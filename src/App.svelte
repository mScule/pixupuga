<script lang="ts">
    import { isLevelOpen, setLevelOpen } from "./lib/game/Progress";

    import ActiveView from "./lib/types/ActiveView";
    import type Level from "./lib/types/Level";

    import Lvl1 from "./assets/level/type-1-boxes/1.json";
    import Lvl2 from "./assets/level/type-1-boxes/2.json";
    import Lvl3 from "./assets/level/type-1-boxes/3.json";
    import Lvl4 from "./assets/level/type-1-boxes/4.json";

    import Lvl5 from "./assets/level/type-2-rock-boulders/5.json";
    import Lvl6 from "./assets/level/type-2-rock-boulders/6.json";
    import Lvl7 from "./assets/level/type-2-rock-boulders/7.json";
    import Lvl8 from "./assets/level/type-2-rock-boulders/8.json";

    import Lvl9 from "./assets/level/type-3-trap-spikes/9.json";
    import Lvl10 from "./assets/level/type-3-trap-spikes/10.json";
    import Lvl11 from "./assets/level/type-3-trap-spikes/11.json";
    import Lvl12 from "./assets/level/type-3-trap-spikes/12.json";

    import Lvl13 from "./assets/level/type-4-hard/13.json";
    import Lvl14 from "./assets/level/type-4-hard/14.json";
    import Lvl15 from "./assets/level/type-4-hard/15.json";
    import Lvl16 from "./assets/level/type-4-hard/16.json";

    import StartScreen from "./lib/component/StartScreen.svelte";
    import LevelSelection from "./lib/component/LevelSelection.svelte";
    import Game from "./lib/component/Game.svelte";

    const levels: Level[] = [
        Lvl1,
        Lvl2,
        Lvl3,
        Lvl4,
        Lvl5,
        Lvl6,
        Lvl7,
        Lvl8,
        Lvl9,
        Lvl10,
        Lvl11,
        Lvl12,
        Lvl13,
        Lvl14,
        Lvl15,
        Lvl16,
    ];

    let activeView: ActiveView = ActiveView.StartScreen;
    let selectedLevel: number = 0;

    function handleStart() {
        activeView = ActiveView.LevelSelection;
    }

    function handleWinning(levelIndex: number) {
        setLevelOpen(levelIndex);

        if (levelIndex < levels.length - 1) {
            setLevelOpen(levelIndex + 1);
        }

        selectedLevel =
            levelIndex < levels.length - 1 ? levelIndex + 1 : levelIndex;

        activeView = ActiveView.LevelSelection;
    }

    function handleExit(levelIndex: number) {
        selectedLevel = levelIndex;
        activeView = ActiveView.LevelSelection;
    }

    function handleLevelSelection(levelIndex: number) {
        if (isLevelOpen(levelIndex) || levelIndex === 0) {
            selectedLevel = levelIndex;
            activeView = ActiveView.Game;
        }
    }
</script>

<main>
    {#if activeView === ActiveView.StartScreen}
        <StartScreen {handleStart} />
    {/if}

    {#if activeView === ActiveView.LevelSelection}
        <LevelSelection
            cursorLocation={selectedLevel}
            levelAmount={levels.length}
            {handleLevelSelection}
        />
    {/if}

    {#if activeView === ActiveView.Game}
        <Game
            title={`Level - ${selectedLevel + 1}`}
            level={levels[selectedLevel]}
            handleWinning={() => handleWinning(selectedLevel)}
            handleExit={() => handleExit(selectedLevel)}
        />
    {/if}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
    }
</style>
