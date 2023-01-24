<script lang="ts">
  import arrow from "../../assets/img/16x16/button/icon/arrow.png";
  import eLetter from "../../assets/img/16x16/button/icon/e.png";
  import qLetter from "../../assets/img/16x16/button/icon/q.png";

  export let handleUp: () => void | null = null;
  export let handleDown: () => void | null = null;
  export let handleLeft: () => void | null = null;
  export let handleRight: () => void | null = null;
  export let handleAction = () => {};
  export let handleAlterAction: () => void | null = null;
</script>

<nav>
  <div class="d-pad">
    <button class="up" on:click={handleUp} disabled={!handleUp}>
      <img src={arrow} alt="Arrow up" />
    </button>
    <button class="down" on:click={handleDown} disabled={!handleDown}>
      <img src={arrow} alt="Arrow down" />
    </button>
    <button class="left" on:click={handleLeft} disabled={!handleLeft}>
      <img src={arrow} alt="Arrow left" />
    </button>
    <button class="right" on:click={handleRight} disabled={!handleRight}>
      <img src={arrow} alt="Arrow right" />
    </button>
  </div>

  <div class="action-buttons">
    <button class="action-primary" on:click={handleAction}>
      <img src={eLetter} alt="Primary action button" />
    </button>

    <button
      class="action-secondary"
      on:click={handleAlterAction}
      disabled={!handleAlterAction}
    >
      <img src={qLetter} alt="Alternate action button" />
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

  button:disabled > img{
    visibility: hidden;
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
