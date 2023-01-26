<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  import KeyboardInput from "../types/KeyboardInput";

  import arrow           from "../../assets/img/16x16/button/icon/arrow.png";
  import actionPrimary   from "../../assets/img/16x16/button/icon/action/primary.png";
  import actionSecondary from "../../assets/img/16x16/button/icon/action/secondary.png";

  export let handleUp:    () => void | null = null;
  export let handleDown:  () => void | null = null;
  export let handleLeft:  () => void | null = null;
  export let handleRight: () => void | null = null;

  export let handleActionPrimary:   () => void        = () => {};
  export let handleActionSecondary: () => void | null = null;

  function handleKeyboardInput(event: KeyboardEvent) {
    switch (event.key) {
      case KeyboardInput.ActionPrimary:
        return handleActionPrimary();
      case KeyboardInput.ActionSecondary:
        return handleActionSecondary && handleActionSecondary();

      case KeyboardInput.Up:
        return handleUp    && handleUp();
      case KeyboardInput.Down:
        return handleDown  && handleDown();
      case KeyboardInput.Left:
        return handleLeft  && handleLeft();
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
    <button class="right" on:click={handleRight} disabled={!handleRight}>
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

<style>
  nav {
    display: flex;
    flex-direction: row;
    width: var(--size-game-width);
    justify-content: space-around;
    align-items: center;
    padding-top: var(--size-buffer-large);
  }

  button,
  img {
    image-rendering: pixelated;
    width: var(--size-control-button);
    height: var(--size-control-button);
  }

  button {
    padding: 0;
    display: block;
    background-color: transparent;
    background-size: var(--size-control-button);
    border: 0;
    font-size: 1.3rem;

    background-image: url("../../assets/img/16x16/button/up.png");
    filter: var(--drop-shadow);
  }

  button:active {
    background-image: url("../../assets/img/16x16/button/down.png");
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

  .action-buttons {
    display: grid;
    grid-template-columns: repeat(3, var(--size-control-button));
    grid-template-rows: repeat(3, var(--size-control-button));
    grid-template-areas:
      ". . ."
      "q . e"
      ". . .";
  }

  .action-primary {
    grid-area: e;
  }

  .action-secondary {
    grid-area: q;
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

  img {
    margin-top: calc(
      (var(--size-control-button) / 1.2) - var(--size-control-button)
    );
  }

  button:active > img {
    margin-top: 0;
  }
</style>
