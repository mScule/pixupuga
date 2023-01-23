<script lang="ts">
  import boolean from "./lib/util/parse/boolean";
  import Game from "./lib/component/Game.svelte";

  import Lvl1 from "./assets/level/1.json";
  import Lvl2 from "./assets/level/2.json";
  import Lvl3 from "./assets/level/3.json";
  import Lvl4 from "./assets/level/4.json";
  import Lvl5 from "./assets/level/5.json";
  import Lvl6 from "./assets/level/6.json";
  import Lvl7 from "./assets/level/7.json";
  import Lvl8 from "./assets/level/8.json";
  import Lvl9 from "./assets/level/9.json";
  import Lvl10 from "./assets/level/10.json";
  import Lvl11 from "./assets/level/11.json";
  import Lvl12 from "./assets/level/12.json";
  import Lvl13 from "./assets/level/13.json";
  import Lvl14 from "./assets/level/14.json";
  import Lvl15 from "./assets/level/15.json";
  import Lvl16 from "./assets/level/16.json";
  import LevelMenu from "./lib/component/LevelMenu.svelte";

  const levels = [
    Lvl1,
    Lvl2,
    Lvl3,
    Lvl4,
    Lvl5,
    Lvl6,
    Lvl7,
    Lvl8,
    Lvl9,
    Lvl10,
    Lvl11,
    Lvl12,
    Lvl13,
    Lvl14,
    Lvl15,
    Lvl16,
  ];

  let inGame = false;
  let selected = 0;

  function handleWinning(levelIndex: number) {
    localStorage.setItem(`level-${levelIndex}`, boolean.toString(true));
    localStorage.setItem(`level-${levelIndex + 1}`, boolean.toString(true));
    inGame = false;
  }

  function handleLevelSelection(levelIndex: number) {
    inGame = true;
    selected = levelIndex;
  }
</script>

<main>
  {#if inGame}
    <Game
      title={`Level - ${selected + 1}`}
      level={levels[selected]}
      handleWinning={() => handleWinning(selected)}
    />
  {:else}
    <LevelMenu levelAmount={levels.length} {handleLevelSelection} />
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
</style>
