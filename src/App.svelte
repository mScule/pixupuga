<script>
  import Game from "./lib/components/Game.svelte";
</script>

<main>
  <h1>{"Sixteen bytes".toUpperCase()}</h1>
  <Game />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>