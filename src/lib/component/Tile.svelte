<script lang="ts">
  import LowerBox from "../../assets/img/8x8/lower/box.png";
  import LowerSolid from "../../assets/img/8x8/lower/solid.png";

  import UpperBox from "../../assets/img/8x8/upper/box.png";
  import UpperSolid from "../../assets/img/8x8/upper/solid.png";

  import PointOne from "../../assets/img/8x8/collectable/point/1.png";
  import PointFive from "../../assets/img/8x8/collectable/point/5.png";
  import CollectableBox from "../../assets/img/8x8/collectable/box.png";

  import Player from "../../assets/img/8x8/player.png";

  import TileType from "../types/TileType";

  export let type: TileType = TileType.Void;
  export let zIndex: number = 0;

  let src: string | null = null;
  let alt: string = "";
  let styleClass: string = "";

  $: {
    switch (type) {
      case TileType.CollectablePointOne:
        src = PointOne;
        alt = "Collectable point 1";
        styleClass = "collectable";
        break;

      case TileType.CollectablePointFive:
        src = PointFive;
        alt = "Collectable point 5";
        styleClass = "collectable";
        break;

      case TileType.CollectableBox:
        src = CollectableBox;
        alt = "Collectable box";
        styleClass = "collectable";
        break;

      case TileType.LowerBox:
        src = LowerBox;
        alt = "Lower Box";
        styleClass = "in-water";
        break;

      case TileType.LowerSolid:
        src = LowerSolid;
        alt = "Lower solid";
        styleClass = "";
        break;

      case TileType.UpperBox:
        src = UpperBox;
        alt = "Upper box";
        styleClass = "";
        break;

      case TileType.UpperSolid:
        src = UpperSolid;
        alt = "Upper solid";
        styleClass = "";
        break;

      case TileType.Player:
        src = Player;
        alt = "Player";
        styleClass = "";
        break;

      case TileType.Void:
        src = null;
        styleClass = "";
        break;
    }
  }
</script>

{#if src}
  <img
    class={styleClass}
    style="
      z-index:{zIndex};
      animation-delay: {(Math.random() * 1000) * 2}ms
    "
    {src}
    {alt}
  />
{/if}

<style>
  img {
    display: block;
    position: absolute;

    width: var(--size-tile);
    height: var(--size-tile);

    image-rendering: pixelated;
  }
  .collectable {
    animation-name: collectable-hover;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out
  }

  @keyframes collectable-hover {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-4px);
    }

    100% {
      transform: translateY(0px);
    }
  }
</style>
