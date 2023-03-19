<script lang="ts">
    import { isLevelOpen, setLevelOpen } from "./lib/game/Progress";

    import ActiveView from "./lib/types/ActiveView";
    import type Level from "./lib/types/Level";

    import Type1Level1 from "./assets/level/1/1";
    import Type1Level2 from "./assets/level/1/2";
    import Type1Level3 from "./assets/level/1/3";
    import Type1Level4 from "./assets/level/1/4";

    import Type2Level1 from "./assets/level/2/1";
    import Type2Level2 from "./assets/level/2/2";
    import Type2Level3 from "./assets/level/2/3";
    import Type2Level4 from "./assets/level/2/4";

    import Type3Level1 from "./assets/level/3/1";
    import Type3Level2 from "./assets/level/3/2";
    import Type3Level3 from "./assets/level/3/3";
    import Type3Level4 from "./assets/level/3/4";

    import Type4Level1 from "./assets/level/4/1";
    import Type4Level2 from "./assets/level/4/2";
    import Type4Level3 from "./assets/level/4/3";
    import Type4Level4 from "./assets/level/4/4";

    import StartScreen from "./lib/component/StartScreen.svelte";
    import LevelSelection from "./lib/component/LevelSelection.svelte";
    import Game from "./lib/component/Game.svelte";
    import DJ from "./lib/component/DJ.svelte";
    import SoundSettings from "./lib/component/SoundSettings.svelte";
    import SoundPlayer from "./lib/component/SoundPlayer.svelte";
    import Version from "./lib/component/Version.svelte";

    const levels: Level[] = [
        Type1Level1,
        Type1Level2,
        Type1Level3,
        Type1Level4,

        Type2Level1,
        Type2Level2,
        Type2Level3,
        Type2Level4,

        Type3Level1,
        Type3Level2,
        Type3Level3,
        Type3Level4,

        Type4Level1,
        Type4Level2,
        Type4Level3,
        Type4Level4,
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
    <DJ>
        <SoundPlayer>
            {#if activeView === ActiveView.StartScreen}
                <StartScreen {handleStart} />
            {:else if activeView === ActiveView.LevelSelection}
                <LevelSelection
                    cursorLocation={selectedLevel}
                    levelAmount={levels.length}
                    {handleLevelSelection}
                />
            {:else if activeView === ActiveView.Game}
                <Game
                    title={`Level - ${selectedLevel + 1}`}
                    level={levels[selectedLevel]}
                    handleWinning={() => handleWinning(selectedLevel)}
                    handleExit={() => handleExit(selectedLevel)}
                />
            {/if}
        </SoundPlayer>
    </DJ>
    <SoundSettings />
    <Version major={0} minor={1} patch={0} />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
    }
</style>
