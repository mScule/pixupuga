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
    let sClass: string | null = null;

    const setTile = (
        source: string,
        alternative: string,
        styleClass: string
    ) => {
        src = source;
        alt = alternative;
        sClass = styleClass;
    };

    $: {
        switch (type) {
            case TileType.CollectablePointOne:
                setTile(PointOne, "Collectable point 1", "collectable");
                break;

            case TileType.CollectablePointFive:
                setTile(PointFive, "Collectable point 5", "collectable");
                break;

            case TileType.CollectableBox:
                setTile(CollectableBox, "Collectable box", "collectable");
                break;

            case TileType.LowerBox:
                setTile(LowerBox, "Lower Box", "in-water");
                break;

            case TileType.LowerSolid:
                setTile(LowerSolid, "Lower solid", null);
                break;

            case TileType.UpperBox:
                setTile(UpperBox, "Upper box", null);
                break;

            case TileType.UpperSolid:
                setTile(UpperSolid, "Upper solid", null);
                break;

            case TileType.Player:
                setTile(Player, "Player", null);
                break;

            case TileType.Void:
                setTile(null, "Void", null);
                break;
        }
    }
</script>

{#if src && sClass && sClass === "collectable"}
    <img
        class={sClass}
        style={`z-index:${zIndex};` +
            `animation-delay: ${Math.random() * 1000 * 2}ms;`}
        {src}
        {alt}
    />
{:else if src && sClass}
    <img class={sClass} {src} {alt} />
{:else if src}
    <img {src} {alt} />
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
        animation-timing-function: ease-in-out;
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
