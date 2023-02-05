<script lang="ts">
    import KeyboardInput from "../types/KeyboardInput";
    import type TileGrid from "../types/TileGrid";

    import Display from "./Display.svelte";
    import ScoreBoard from "./ScoreBoard.svelte";
    import Grid from "./Grid.svelte";

    import playSound from "../game/SoundPlayer";
    import SoundType from "../types/SoundType";

    export let title: string;
    export let points: number;
    export let boxes: number;
    export let died: boolean;

    export let winningPoints: number;
    export let winningText: string | null = null;

    export let stacks: TileGrid;

    let winned = false;
    $: winned = points >= winningPoints;

    $: winned && playSound(SoundType.LevelWin);
    $: died && playSound(SoundType.LevelLose);
</script>

<Display>
    <div class="game-display">
        <ScoreBoard {points} {boxes} {winningPoints} />
        {#if winned}
            <h2>{title} passed!</h2>
            {#if winningText}
                <p>{winningText}</p>
            {/if}
            <p>Press "{KeyboardInput.ActionPrimary}" to proceed</p>
        {:else if died}
            <h2>You DIED</h2>
            <p>Press "{KeyboardInput.ActionPrimary}" to retry</p>
        {:else}
            <Grid {stacks} />
        {/if}
    </div>
</Display>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: var(--size-buffer-small);
    }

    :global(.game-display > *) {
        margin-bottom: var(--size-buffer-medium);
    }
    :global(.game-display > *:last-child) {
        margin-bottom: 0;
    }

    h2 {
        animation-name: winning;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    @keyframes winning {
        0% {
            filter: opacity(100%);
        }
        100% {
            filter: opacity(0%);
        }
    }
</style>
