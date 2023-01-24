<script lang="ts">
  import splashScreen from "../../assets/img/128x128/splash-screen.png";
  import Controls from "./Controls.svelte";
  import Display from "./Display.svelte";
  import Title from "./Title.svelte";

  export let handleSplashScreen: () => void;

  function handleKeyboard(event: KeyboardEvent) {
    switch (event.key) {
      case "e":
        return handleAction();

    }
  }

  window.addEventListener("keypress", handleKeyboard);

  function removeEventListeners() {
    window.removeEventListener("keypress", handleKeyboard);
  }

  function handleAction() {
    handleSplashScreen();
    removeEventListeners();
  }
</script>

<Display>
  <div>
    <img src={splashScreen} alt="Splash screen" />
    <h2>Press "e" to play</h2>
  </div>
</Display>

<Title title={"Adventure 4096"} />

<Controls {handleAction} />

<style>
  div {
    height: var(--size-game-height);
    width: var(--size-game-height);

    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    position: absolute;
    height: var(--size-game-height);
    width: var(--size-game-height);
    image-rendering: pixelated;
  }
</style>
