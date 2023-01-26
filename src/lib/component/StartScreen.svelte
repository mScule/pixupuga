<script lang="ts">
  import KeyboardInput from "../types/KeyboardInput";

  import startScreen from "../../assets/img/128x128/start-screen.png";

  import Controls from "./Controls.svelte";
  import Display  from "./Display.svelte";
  import Title    from "./Title.svelte";

  export let handleStart: () => void;

  const handleActionPrimary = () => handleStart();
</script>

<Display>
  <div>
    <img src={startScreen} alt="Splash screen" />
    <h2>Press "{KeyboardInput.ActionPrimary}" to play</h2>
  </div>
</Display>
<Title title={"Adventure 4096"} />
<Controls {handleActionPrimary} />

<style>
  div {
    height: var(--size-game-height);
    width:  var(--size-game-height);

    display:         flex;
    flex-direction:  column;
    justify-content: end;
    align-items:     center;
  }
  img {
    position: absolute;

    width:  var(--size-game-height);
    height: var(--size-game-height);

    image-rendering: pixelated;
  }
  h2 {
    margin-bottom: var(--size-buffer-large);

    animation-name:            start-screen-text;
    animation-duration:        1000ms;
    animation-iteration-count: infinite;
  }

  @keyframes start-screen-text {
    0%,  49%  { filter: opacity(0%);   }
    50%, 100% { filter: opacity(100%); }
  }
</style>
