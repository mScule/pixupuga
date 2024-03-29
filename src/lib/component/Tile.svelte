<script lang="ts">
    import LowerBox from "../../assets/img/8x8/lower/box.png";
    import LowerSolidIsland from "../../assets/img/8x8/lower/solid/island.png";
    import LowerSolidJungle from "../../assets/img/8x8/lower/solid/jungle.png";
    import LowerSolidDungeon from "../../assets/img/8x8/lower/solid/dungeon.png";
    import LowerBoulderSunken from "../../assets/img/8x8/lower/boulder/sunken.gif";
    import LowerBoulderAfloat from "../../assets/img/8x8/lower/boulder/afloat.png";
    import LowerTrapSpikesOff from "../../assets/img/8x8/lower/trap-spikes/off.png";
    import LowerTrapSpikesOn from "../../assets/img/8x8/lower/trap-spikes/on.png";
    import LowerCursed from "../../assets/img/8x8/lower/cursed.png";
    import LowerHintUnused from "../../assets/img/8x8/lower/hint/unused.png";
    import LowerHintUsed from "../../assets/img/8x8/lower/hint/used.png";

    import LowerRollerUpOff from "../../assets/img/8x8/lower/roller/off/up.png";
    import LowerRollerUpOn from "../../assets/img/8x8/lower/roller/on/up.png";
    import LowerRollerDownOff from "../../assets/img/8x8/lower/roller/off/down.png";
    import LowerRollerDownOn from "../../assets/img/8x8/lower/roller/on/down.png";
    import LowerRollerLeftOff from "../../assets/img/8x8/lower/roller/off/left.png";
    import LowerRollerLeftOn from "../../assets/img/8x8/lower/roller/on/left.png";
    import LowerRollerRightOff from "../../assets/img/8x8/lower/roller/off/right.png";
    import LowerRollerRightOn from "../../assets/img/8x8/lower/roller/on/right.png";

    import UpperBox from "../../assets/img/8x8/upper/box.png";
    import UpperSolidIsland from "../../assets/img/8x8/upper/solid/island.png";
    import UpperSolidJungle from "../../assets/img/8x8/upper/solid/jungle.png";
    import UpperSolidDungeon from "../../assets/img/8x8/upper/solid/dungeon.png";
    import UpperBoulderStill from "../../assets/img/8x8/upper/boulder/still.png";
    import UpperBoulderMoving from "../../assets/img/8x8/upper/boulder/moving.gif";

    import PointOne from "../../assets/img/8x8/collectable/point/1.png";
    import PointFive from "../../assets/img/8x8/collectable/point/5.png";
    import CollectableBox from "../../assets/img/8x8/collectable/box.png";

    import Player from "../../assets/img/8x8/player.png";

    import TileType from "../types/TileType";
    import LevelWorld from "../types/LevelWorld";

    import switchExpression from "../util/switchExpression";

    export let type: TileType = TileType.Void;
    export let world: LevelWorld = LevelWorld.Dungeon;
    export let zIndex: number = 0;

    let src: string | null = null;
    let scs: string | null = null;
    let iss: string | null = null;
    let alt: string = "";

    const setZIndex = () => `z-index:${zIndex}`;
    const setRandomAnimationDelay = () =>
        `animation-delay:${(Math.random() * 1000 * 2).toFixed(2)}ms`;

    function setTile(
        source: string,
        alternative: string,
        inlineStyles?: string[],
        styleClasses?: string[]
    ) {
        src = source;
        alt = alternative;
        iss = inlineStyles
            ? inlineStyles
                  .map((inlineStyle, index) =>
                      index === 0 ? inlineStyle : `;${inlineStyle}`
                  )
                  .join("")
            : null;
        scs = styleClasses
            ? styleClasses
                  .map((styleClass) => (" " + styleClass ? styleClass : ""))
                  .join("")
                  .trim()
            : null;
    }

    $: {
        switch (type) {
            case TileType.CollectablePointOne:
                setTile(
                    PointOne,
                    "Collectable point 1",
                    [setZIndex(), setRandomAnimationDelay()],
                    ["collectable"]
                );
                break;

            case TileType.CollectablePointFive:
                setTile(
                    PointFive,
                    "Collectable point 5",
                    [setZIndex(), setRandomAnimationDelay()],
                    ["collectable"]
                );
                break;

            case TileType.CollectableBox:
                setTile(
                    CollectableBox,
                    "Collectable box",
                    [setZIndex(), setRandomAnimationDelay()],
                    ["collectable"]
                );
                break;

            case TileType.LowerBoxOnTopOfSunkenBoulder:
            case TileType.LowerBox:
                setTile(LowerBox, "Lower Box", [setZIndex()], ["in-water"]);
                break;

            case TileType.LowerSolid:
                setTile(
                    switchExpression(
                        world,
                        [
                            [LevelWorld.Island, LowerSolidIsland],
                            [LevelWorld.Jungle, LowerSolidJungle],
                            [LevelWorld.Dungeon, LowerSolidDungeon],
                        ],
                        LowerSolidIsland
                    ),
                    "Lower solid",
                    [setZIndex()]
                );
                break;

            case TileType.LowerBoulderSunken:
                setTile(LowerBoulderSunken, "Lower Boulder - Sunken", [
                    setZIndex(),
                ]);
                break;

            case TileType.LowerBoulderAfloat:
                setTile(LowerBoulderAfloat, "Lower Boulder - Afloat", [
                    setZIndex(),
                ]);
                break;

            case TileType.LowerTrapSpikesOff:
                setTile(LowerTrapSpikesOff, "Lower Trap spikes - Off", [
                    setZIndex(),
                ]);
                break;

            case TileType.LowerTrapSpikesOn:
                setTile(LowerTrapSpikesOn, "Lower Trap spikes - On", [
                    setZIndex(),
                ]);
                break;

            case TileType.LowerCursed:
                setTile(LowerCursed, "Lower Cursed tile", [setZIndex()]);
                break;

            case TileType.LowerHintUnused:
                setTile(LowerHintUnused, "Lower Hint - Un used", [setZIndex()]);
                break;
            case TileType.LowerHintUsed:
                setTile(LowerHintUsed, "Lower Hint - Used", [setZIndex()]);
                break;

            case TileType.LowerRollerUpOff:
                setTile(LowerRollerUpOff, "Lower Roller Up - Off", [
                    setZIndex(),
                ]);
                break;
            case TileType.LowerRollerUpOn:
                setTile(LowerRollerUpOn, "Lower Roller Up - On", [setZIndex()]);
                break;
            case TileType.LowerRollerDownOff:
                setTile(LowerRollerDownOff, "Lower Roller Down - Off", [
                    setZIndex(),
                ]);
                break;
            case TileType.LowerRollerDownOn:
                setTile(LowerRollerDownOn, "Lower Roller Down - On", [
                    setZIndex(),
                ]);
                break;
            case TileType.LowerRollerLeftOff:
                setTile(LowerRollerLeftOff, "Lower Roller Left - Off", [
                    setZIndex(),
                ]);
                break;
            case TileType.LowerRollerLeftOn:
                setTile(LowerRollerLeftOn, "Lower Roller Left - On", [
                    setZIndex(),
                ]);
                break;
            case TileType.LowerRollerRightOff:
                setTile(LowerRollerRightOff, "Lower Roller Right - Off", [
                    setZIndex(),
                ]);
                break;
            case TileType.LowerRollerRightOn:
                setTile(LowerRollerRightOn, "Lower Roller Right - On", [
                    setZIndex(),
                ]);
                break;
            case TileType.UpperBox:
                setTile(UpperBox, "Upper box", [setZIndex()], ["shift-up"]);
                break;

            case TileType.UpperSolid:
                setTile(
                    switchExpression(
                        world,
                        [
                            [LevelWorld.Island, UpperSolidIsland],
                            [LevelWorld.Jungle, UpperSolidJungle],
                            [LevelWorld.Dungeon, UpperSolidDungeon],
                        ],
                        UpperSolidIsland
                    ),
                    "Upper solid",
                    [setZIndex()],
                    ["shift-up"]
                );
                break;

            case TileType.UpperBoulder:
                setTile(
                    UpperBoulderStill,
                    "Upper Boulder",
                    [setZIndex()],
                    ["shift-up"]
                );
                break;

            case TileType.UpperBoulderMoving:
                setTile(
                    UpperBoulderMoving,
                    "Upper Boulder - Moving",
                    [setZIndex()],
                    ["shift-up"]
                );
                break;

            case TileType.Player:
                setTile(Player, "Player", [setZIndex()], ["shift-up"]);
                break;

            case TileType.Void:
                setTile(null, "Void");
                break;
        }
    }
</script>

{#if src && iss && scs}
    <img {src} {alt} style={iss} class={scs} />
{:else if src && iss}
    <img {src} {alt} style={iss} />
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

    .shift-up {
        transform: translateY(var(--translate-y-game-solid));
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
