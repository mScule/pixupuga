<script>
  import Game from "./lib/component/Game.svelte";
  import Level1 from "./assets/level/1.json";
</script>

<main>
  <Game level={Level1} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
</style>
