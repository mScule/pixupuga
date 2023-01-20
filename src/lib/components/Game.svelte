<script>
    import ScoreBoard from "./ScoreBoard.svelte";
    import Grid from "./Grid.svelte";
  import TileType from "../types/TileType";

  const arr = []

  for(let i = 0; i < 256; i++) {
    arr.push([TileType.GroundSolid, TileType.Player])
  }
</script>

<section>
    <ScoreBoard bits={0} boxes={20}/>
    <Grid stacks={arr}/>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: var(--size-game-width);
        background-color: var(--color-game);
        padding: var(--size-buffer-medium);
        border-radius: var(--size-border-radius);
    }
</style>
