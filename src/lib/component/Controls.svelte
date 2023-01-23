<script lang="ts">
    import arrow from "../../assets/img/16x16/button/icon/arrow.png";
    import o   from "../../assets/img/16x16/button/icon/o.png";

    export let handleUp = () => {};
    export let handleDown = () => {};
    export let handleLeft = () => {};
    export let handleRight = () => {};
    export let handleAction = () => {};
</script>

<nav>
  <div class="d-pad">
    <button class="up" on:click={handleUp}>
        <img  src={arrow} alt="Arrow up"/>
    </button>
    <button class="down" on:click={handleDown}>
        <img src={arrow} alt="Arrow down"/>
    </button>
    <button class="left" on:click={handleLeft}>
        <img src={arrow} alt="Arrow left"/>
    </button>
    <button class="right" on:click={handleRight}>
        <img src={arrow} alt="Arrow right"/>
    </button>
  </div>

  <button on:click={handleAction}>
        <img src={o} alt={'Action button "o"'} />
  </button>
</nav>

<style>
  nav {
    display: flex;
    flex-direction: row;
    width: calc(var(--size-game) + var(--size-buffer-large));
    justify-content: space-around;
    align-items: center;
    padding-top: var(--size-buffer-medium);
  }

  button, img {
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

    background-image: url("../../assets/img/16x16/button/up.png");
    filter: var(--drop-shadow);
  }

  button:active {
    background-image: url("../../assets/img/16x16/button/down.png");
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

  .up { grid-area: up; }
  .up > img { transform: rotate(calc(90deg * 1)); }

  .down { grid-area: down; }
  .down > img { transform: rotate(calc(90deg * 3)); }

  .left { grid-area: left; }
  .left > img { transform: rotate(calc(90deg * 0)); }

  .right { grid-area: right; }
  .right > img { transform: rotate(calc(90deg * 2)); }

  img {
    margin-top: calc((var(--size-control-button) / 1.2) - var(--size-control-button));
  }

  button:active > img {
    margin-top: 0;
  }
</style>
