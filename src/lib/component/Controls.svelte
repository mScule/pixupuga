<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    import KeyboardInput from "../types/KeyboardInput";

    import isFullscreenEnabled from "../settings/Fullscreen";

    export let handleUp: () => void | null = null;
    export let handleDown: () => void | null = null;
    export let handleLeft: () => void | null = null;
    export let handleRight: () => void | null = null;

    export let handleActionPrimary: () => void = () => {};
    export let handleActionSecondary: () => void | null = null;

    function handleKeyboardInput(event: KeyboardEvent) {
        switch (event.key) {
            case KeyboardInput.ActionPrimary:
                return handleActionPrimary();
            case KeyboardInput.ActionSecondary:
                return handleActionSecondary && handleActionSecondary();

            case KeyboardInput.Up:
                return handleUp && handleUp();
            case KeyboardInput.Down:
                return handleDown && handleDown();
            case KeyboardInput.Left:
                return handleLeft && handleLeft();
            case KeyboardInput.Right:
                return handleRight && handleRight();
        }
    }

    onMount(() => {
        window.addEventListener("keypress", handleKeyboardInput);
    });

    onDestroy(() => {
        window.removeEventListener("keypress", handleKeyboardInput);
    });
</script>

{#if !isFullscreenEnabled()}
    <nav>
        <div class="d-pad">
            <button class="up" on:click={handleUp} disabled={!handleUp}>
                <div class="arrow" />
            </button>
            <button class="down" on:click={handleDown} disabled={!handleDown}>
                <div class="arrow" />
            </button>
            <button class="left" on:click={handleLeft} disabled={!handleLeft}>
                <div class="arrow" />
            </button>
            <button
                class="right"
                on:click={handleRight}
                disabled={!handleRight}
            >
                <div class="arrow" />
            </button>
        </div>

        <div class="action-buttons">
            <button class="action-primary-location" on:click={handleActionPrimary}>
                <div class="action-primary" />
            </button>

            <button
                class="action-secondary-location"
                on:click={handleActionSecondary}
                disabled={!handleActionSecondary}
            >
                <div class="action-secondary" />
            </button>
        </div>
    </nav>
{/if}

<style>
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: var(--size-game-width);
    }

    button {
        image-rendering: pixelated;

        width: var(--size-control-button);
        height: var(--size-control-button);

        display: block;
        padding: 0;
        border: 0;

        background-color: transparent;
        background-image: url("../../assets/img/16x16/button/up.png");
        background-size: var(--size-control-button);
        font-size: 1.3rem;
    }
    button:disabled, button:active {
        background-image: url("../../assets/img/16x16/button/down.png");
    }
    button:disabled > div, button:active > div {
        background: transparent
    }

    .action-primary-location {
        grid-area: primary;
    }
    .action-primary {
        background: url(../../assets/img/16x16/button/icon/action/primary.png);
    }

    .action-secondary-location {
        grid-area: secondary;
    }
    .action-secondary {
        background: url(../../assets/img/16x16/button/icon/action/secondary.png);
    }

    .arrow {
        background: url(../../assets/img/16x16/button/icon/arrow.png);
    }

    .d-pad {
        display: grid;

        grid-template-columns: repeat(3, var(--size-control-button));
        grid-template-rows: var(--size-control-button);
        grid-template-areas:
            ".    up   .    "
            "left .    right"
            ".    down .    ";
    }

    .up {
        grid-area: up;
    }
    .up > div {
        transform: rotate(calc(90deg * 1));
    }

    .down {
        grid-area: down;
    }
    .down > div {
        transform: rotate(calc(90deg * 3));
    }

    .left {
        grid-area: left;
    }
    .left > div {
        transform: rotate(calc(90deg * 0));
    }

    .right {
        grid-area: right;
    }
    .right > div {
        transform: rotate(calc(90deg * 2));
    }

    .action-buttons {
        display: grid;

        grid-template-columns: repeat(2, var(--size-control-button));
        grid-template-rows: repeat(2, var(--size-control-button));
        column-gap: var(--size-buffer-medium);
        grid-template-areas:
            ".         primary"
            "secondary .      ";
    }

    .arrow, .action-primary, .action-secondary {
        width: var(--size-control-button);
        height: var(--size-control-button);
        background-size:contain;
    }
</style>
