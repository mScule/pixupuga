<script lang="ts">
    import { onMount, getContext } from "svelte";

    import Context, { type DJContext } from "../types/Context";
    import KeyboardInput               from "../types/KeyboardInput";
    import Track                       from "../types/Track";
    import Selection                   from "../types/Selection";
    import Movement                    from "../types/Movement";

    import boolean from "../parse/boolean";
    import clamp   from "../math/clamp";

    import Display  from "./Display.svelte";
    import Controls from "./Controls.svelte";

    import { isLevelOpen } from "../game/Progress";

    import Locked from "../../assets/img/16x16/selection/lock.png";

    import Title from "./Title.svelte";

    export let handleLevelSelection: (levelIndex: number) => void;
    export let levelAmount: number;
    export let cursorLocation: number = 0;
    export let levelNames: string[];

    let selectionGrid: Selection[] = [];
    let selectionDescription = "";

    $: {
        selectionDescription =
            "Level: " +
            (isLevelOpen(cursorLocation) ? levelNames[cursorLocation]: "Locked");
    }

    const { requestTrack } = getContext<DJContext>(Context.DJ);

    function isLevelOpened(levelIndex: number) {
        return (
            levelIndex === 0 ||
            boolean.fromString(localStorage.getItem(`level-${levelIndex}`))
        );
    }

    function getSelectionClasses(levelIndex: number, selection: Selection) {
        const isSelected = selection === Selection.Selected ? "selected" : "";
        const isOpened = isLevelOpened(levelIndex) ? "opened" : "locked";
        return `${isSelected} ${isOpened}`;
    }

    function renderLevelGrid() {
        selectionGrid = Array(levelAmount).fill(Selection.Unselected);
        selectionGrid[cursorLocation] = Selection.Selected;
    }

    function moveCursor(movement: Movement) {
        let newLocation = cursorLocation;

        switch (movement) {
            case Movement.Up:    newLocation = cursorLocation - 4; break;
            case Movement.Down:  newLocation = cursorLocation + 4; break;
            case Movement.Left:  newLocation = cursorLocation - 1; break;
            case Movement.Right: newLocation = cursorLocation + 1; break;
        }

        newLocation = clamp(newLocation, 0, levelAmount - 1);

        cursorLocation = newLocation;
        renderLevelGrid();
    }

    const handleUp    = () => moveCursor(Movement.Up);
    const handleDown  = () => moveCursor(Movement.Down);
    const handleLeft  = () => moveCursor(Movement.Left);
    const handleRight = () => moveCursor(Movement.Right);

    const handleActionPrimary = () => handleLevelSelection(cursorLocation);

    onMount(() => {
        renderLevelGrid();
        requestTrack(Track.LevelSelection);
    });
</script>

<Display>
    <div class="level-menu">
        <h2>Levels</h2>
        <p>
            Navigate to level with d-pad, and select it with the action button
            "{KeyboardInput.ActionPrimary}"
        </p>
        <div class="level-grid">
            {#each selectionGrid as selection, level}
                <div
                    class="level-selection {getSelectionClasses(
                        level,
                        selection
                    )}"
                >
                    {#if isLevelOpened(level)}
                        <p>{level + 1}</p>
                    {:else}
                        <img src={Locked} alt="Level {level + 1} - Locked" />
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</Display>

<Title text={selectionDescription}/>

<Controls
    {handleUp}
    {handleDown}
    {handleLeft}
    {handleRight}
    {handleActionPrimary}
/>

<style>
    .level-menu {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: var(--size-buffer-small);
    }
    .level-grid {
        display: grid;
        grid-template-columns: repeat(4, var(--size-selection));
    }
    .level-selection {
        display: flex;
        justify-content: center;
        align-items: center;

        width: var(--size-selection);
        height: var(--size-selection);

        image-rendering: pixelated;
    }

    .selected {
        animation-name: selection-pulse;
        animation-duration: 1000ms;
        animation-iteration-count: infinite;
    }
    .locked img {
        width: var(--size-selection);
        height: var(--size-selection);
    }

    .locked {
        background: url(../../assets/img/16x16/selection/locked.png);
        background-size: var(--size-selection);
    }
    .opened {
        background: url(../../assets/img/16x16/selection/opened.png);
        background-size: var(--size-selection);
    }
    .selected.locked {
        background: url(../../assets/img/16x16/selection/selected-locked.png);
        background-size: var(--size-selection);
    }
    .selected.opened {
        background: url(../../assets/img/16x16/selection/selected-opened.png);
        background-size: var(--size-selection);
    }

    @keyframes selection-pulse {
        0% {
            filter: opacity(50%);
        }
        50% {
            filter: opacity(100%);
        }
        100% {
            filter: opacity(50%);
        }
    }
</style>
