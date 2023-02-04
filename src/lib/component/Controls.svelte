<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    import KeyboardInput from "../types/KeyboardInput";

    import arrow from "../../assets/img/16x16/button/icon/arrow.png";
    import actionPrimary from "../../assets/img/16x16/button/icon/action/primary.png";
    import actionSecondary from "../../assets/img/16x16/button/icon/action/secondary.png";

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
                <img src={arrow} alt="Arrow - Up" />
            </button>
            <button class="down" on:click={handleDown} disabled={!handleDown}>
                <img src={arrow} alt="Arrow - Down" />
            </button>
            <button class="left" on:click={handleLeft} disabled={!handleLeft}>
                <img src={arrow} alt="Arrow - Left" />
            </button>
            <button
                class="right"
                on:click={handleRight}
                disabled={!handleRight}
            >
                <img src={arrow} alt="Arrow - Right" />
            </button>
        </div>

        <div class="action-buttons">
            <button class="action-primary" on:click={handleActionPrimary}>
                <img src={actionPrimary} alt="Action button - Primary" />
            </button>

            <button
                class="action-secondary"
                on:click={handleActionSecondary}
                disabled={!handleActionSecondary}
            >
                <img src={actionSecondary} alt="Action button - Secondary" />
            </button>
        </div>
    </nav>
{/if}

<style>
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding-top: var(--size-buffer-large);

        width: var(--size-game-width);
    }

    img {
        image-rendering: pixelated;

        width: var(--size-control-button);
        height: var(--size-control-button);

        margin-top: calc(
            (var(--size-control-button) / 1.2) - var(--size-control-button)
        );
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

        filter: var(--drop-shadow);
    }

    button:active {
        background-image: url("../../assets/img/16x16/button/down.png");
    }

    button:active > img {
        margin-top: 0;
    }
    button:disabled > img {
        filter: opacity(45%);
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
    .up > img {
        transform: rotate(calc(90deg * 1));
    }

    .down {
        grid-area: down;
    }
    .down > img {
        transform: rotate(calc(90deg * 3));
    }

    .left {
        grid-area: left;
    }
    .left > img {
        transform: rotate(calc(90deg * 0));
    }

    .right {
        grid-area: right;
    }
    .right > img {
        transform: rotate(calc(90deg * 2));
    }

    .action-buttons {
        display: grid;

        grid-template-columns: repeat(3, var(--size-control-button));
        grid-template-rows: repeat(3, var(--size-control-button));
        grid-template-areas:
            ".         . .      "
            "secondary . primary"
            ".         . .      ";
    }

    .action-primary {
        grid-area: primary;
    }
    .action-secondary {
        grid-area: secondary;
    }
</style>
