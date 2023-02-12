<script lang="ts">
    import Tile from "./Tile.svelte";
    import TileType from "../types/TileType";
    import type TileStack from "../types/TileStack";
    import LevelWorld from "../types/LevelWorld";

    export let world: LevelWorld = LevelWorld.Dungeon;
    export let tiles: TileStack = [TileType.Void, TileType.Void];
</script>

<figure class="stack">
    {#each tiles as type, zIndex}
        <Tile {type} {zIndex} {world}/>
    {/each}
</figure>

<style>
    figure {
        display: block;
        position: relative;

        width: var(--size-tile);
        height: var(--size-tile);

        margin: 0;
        padding: 0;
    }

    :global(.stack > *) {
        filter: var(--drop-shadow-game);
    }
</style>
