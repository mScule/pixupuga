<script lang="ts">
  import LowerBox   from "../../assets/img/8x8/lower/box.png";
  import LowerSolid from "../../assets/img/8x8/lower/solid.png";

  import UpperBox    from "../../assets/img/8x8/upper/box.png";
  import UpperSolid  from "../../assets/img/8x8/upper/solid.png";

  import PointOne        from "../../assets/img/8x8/collectable/point/1.png";
  import PointFive       from "../../assets/img/8x8/collectable/point/5.png";
  import CollectableBox  from "../../assets/img/8x8/collectable/box.png";

  import Player from "../../assets/img/8x8/player.png";

  import TileType from "../types/TileType";

  export let type: TileType = TileType.Void;
  export let zIndex: number = 0;

  let src: string | null = null;
  let alt: string = "";

  $: {
    switch (type) {
      case TileType.CollectablePointOne:
        src = PointOne;
        alt = "Collectable point 1";
        break;

      case TileType.CollectablePointFive:
        src = PointFive;
        alt = "Collectable point 5";
        break;

      case TileType.CollectableBox:
        src = CollectableBox;
        alt = "Collectable box";
        break;

      case TileType.LowerBox:
        src = LowerBox;
        alt = "Lower Box";
        break;

      case TileType.LowerSolid:
        src = LowerSolid;
        alt = "Lower solid";
        break;

      case TileType.UpperBox:
        src = UpperBox;
        alt = "Upper box";
        break;

      case TileType.UpperSolid:
        src = UpperSolid;
        alt = "Upper solid";
        break;

      case TileType.Player:
        src = Player;
        alt = "Player";
        break;

      case TileType.Void:
        src = null;
        break;
    }
  }
</script>

{#if src}
  <img {src} {alt} style="z-index:{zIndex}" />
{/if}

<style>
  img {
    display: block;
    position: absolute;

    width: var(--size-tile);
    height: var(--size-tile);

    image-rendering: pixelated;
  }
</style>
