<script lang="ts">
    import { isLevelOpen, setLevelOpen } from "./lib/game/Progress";

    import ActiveView from "./lib/types/ActiveView";
    import type Level from "./lib/types/Level";

    import Level1 from "./assets/level/islands/1";
    import Level2 from "./assets/level/islands/2";
    import Level3 from "./assets/level/islands/3";
    import Level4 from "./assets/level/islands/4";

    import Level5 from "./assets/level/islands/5";
    import Level6 from "./assets/level/islands/6";
    import Level7 from "./assets/level/islands/7";
    import Level8 from "./assets/level/islands/8";

    import Level9 from "./assets/level/jungle/9";
    import Level10 from "./assets/level/jungle/10";
    import Level11 from "./assets/level/jungle/11";
    import Level12 from "./assets/level/jungle/12";

    import Level13 from "./assets/level/dungeon/13";
    import Level14 from "./assets/level/dungeon/14";
    import Level15 from "./assets/level/dungeon/15";
    import Level16 from "./assets/level/dungeon/16";

    import StartScreen from "./lib/component/StartScreen.svelte";
    import LevelSelection from "./lib/component/LevelSelection.svelte";
    import Game from "./lib/component/Game.svelte";
    import DJ from "./lib/component/DJ.svelte";
    import SoundSettings from "./lib/component/SoundSettings.svelte";
    import SoundPlayer from "./lib/component/SoundPlayer.svelte";
    import Version from "./lib/component/Version.svelte";

    const levels: Level[] = [
        Level1,
        Level2,
        Level3,
        Level4,
        Level5,
        Level6,
        Level7,
        Level8,
        Level9,
        Level10,
        Level11,
        Level12,
        Level13,
        Level14,
        Level15,
        Level16,
    ];

    let activeView: ActiveView = ActiveView.Game;
    let selectedLevel: number = 15 -1;

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
                    levelNames={levels.map(level => level.name)}
                    cursorLocation={selectedLevel}
                    levelAmount={levels.length}
                    {handleLevelSelection}
                />
            {:else if activeView === ActiveView.Game}
                <Game
                    title={`${selectedLevel + 1}`}
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
