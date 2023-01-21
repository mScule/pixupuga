<script lang="ts">
  import CollectableBitZero from "../../assets/img/8x8/collectable/bit-0.png";
  import CollectableBitOne  from "../../assets/img/8x8/collectable/bit-1.png";
  import CollectableBox     from "../../assets/img/8x8/collectable/box.png";

  import GroundBox          from "../../assets/img/8x8/ground/box.png";
  import GroundSolid        from "../../assets/img/8x8/ground/solid.png";

  import WallBox            from "../../assets/img/8x8/wall/box.png";
  import WallSolid          from "../../assets/img/8x8/wall/solid.png";

  import Player             from "../../assets/img/8x8/player.png";

  import TileType from "../types/TileType";

  export let type: TileType = TileType.Void;
  export let zIndex: number = 0;

  let src: string | null = null;
  let alt: string = "";

  $: {
    switch (type) {
      case TileType.CollectableBitOne:
        src = CollectableBitOne;
        alt = 'Collectable bit "0"';
        break;
      case TileType.CollectableBitZero:
        src = CollectableBitZero;
        alt = 'Collectable bit "1"';
        break;
      case TileType.CollectableBox:
        src = CollectableBox;
        alt = "Collectable box";
        break;

      case TileType.GroundBox:
        src = GroundBox;
        alt = "Box ground";
        break;
      case TileType.GroundSolid:
        src = GroundSolid;
        alt = "Solid ground";
        break;

      case TileType.WallBox:
        src = WallBox;
        alt = "Box wall";
        break;
      case TileType.WallSolid:
        src = WallSolid;
        alt = "Box wall";
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
