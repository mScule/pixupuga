<script lang="ts">
    import KeyboardInput from "../types/KeyboardInput";
    import type TileGrid from "../types/TileGrid";
    import type LevelWorld from "../types/LevelWorld";

    import Display from "./Display.svelte";
    import ScoreBoard from "./ScoreBoard.svelte";
    import Grid from "./Grid.svelte";

    export let title: string;
    export let points: number;
    export let boxes: number;
    export let died: boolean;
    export let hint: string | null = null;
    export let world: LevelWorld;

    export let winningPoints: number;
    export let winningText: string | null = null;

    export let stacks: TileGrid;

    let winned = false;
    $: winned = points >= winningPoints;

    if (hint) {
        console.log("HINT");
    }
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
        {:else if hint !== null}
            <h2>?? hint ??</h2>
            <p>{hint}</p>
        {:else}
            <Grid {stacks} {world} />
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
