<script lang="ts">
  import boolean from "../util/parse/boolean";
  import clamp from "../math/clamp";
  import Movement from "../types/Movement";

  import Locked from "../../assets/img/16x16/selection/lock.png";

  import Display from "./Display.svelte";
  import Controls from "./Controls.svelte";
  import Title from "./Title.svelte";
  import KeyboardInput from "../types/KeyboardInput";

  enum Selection {
    Selected,
    Unselected,
  }

  export let handleLevelSelection: (levelIndex: number) => void;
  export let levelAmount: number;
  export let cursor = 0;

  let levels = Array(levelAmount).fill(Selection.Unselected);
  levels[cursor] = Selection.Selected;

  function isLevelOpened(levelIndex: number) {
    return (
      levelIndex === 0 ||
      boolean.fromString(localStorage.getItem(`level-${levelIndex}`))
    );
  }

  function getSelectionClasses(levelIndex: number, selection: Selection) {
    const isSelected = selection === Selection.Selected ? "selected" : "";
    const isOpened = isLevelOpened(levelIndex) ? "opened" : "locked";
    return `${isSelected} ${isOpened}`;
  }

  function moveCursor(movement: Movement) {
    let newCursorLocation = cursor;

    switch (movement) {
      case Movement.Up:
        newCursorLocation = cursor - 4;
        break;
      case Movement.Down:
        newCursorLocation = cursor + 4;
        break;
      case Movement.Left:
        newCursorLocation = cursor - 1;
        break;
      case Movement.Right:
        newCursorLocation = cursor + 1;
        break;
    }

    newCursorLocation = clamp(newCursorLocation, 0, levelAmount - 1);
    cursor = newCursorLocation;
    levels = Array(levelAmount).fill(Selection.Unselected);
    levels[cursor] = Selection.Selected;
  }

  function handleUp() {
    moveCursor(Movement.Up);
  }
  function handleDown() {
    moveCursor(Movement.Down);
  }
  function handleLeft() {
    moveCursor(Movement.Left);
  }
  function handleRight() {
    moveCursor(Movement.Right);
  }

  function handleActionPrimary() {
    handleLevelSelection(cursor);
  }
</script>

<Display>
  <div class="level-menu">
    <h2>Levels</h2>
    <p>
      Navigate to level with d-pad, and select it with the action button
      "{KeyboardInput.ActionPrimary}"
    </p>
    <div class="level-grid">
      {#each levels as selection, level}
        <div class="level-selection {getSelectionClasses(level, selection)}">
          {#if isLevelOpened(level)}
            <p>{level + 1}</p>
          {:else}
            <img src={Locked} alt="Level {level + 1} LOCKED" />
          {/if}
        </div>
      {/each}
    </div>
  </div>
</Display>
<Title title="Adventure 4096" />
<Controls
  {handleUp}
  {handleDown}
  {handleLeft}
  {handleRight}
  {handleActionPrimary}
/>

<style>
  .level-menu {
    padding: var(--size-buffer-small);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .level-grid {
    display: grid;
    grid-template-columns: repeat(4, var(--size-selection));
  }
  .level-selection {
    display: flex;
    image-rendering: pixelated;
    width: var(--size-selection);
    height: var(--size-selection);
    justify-content: center;
    align-items: center;
  }

  .selected {
    animation-name: selection-pulse;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
  }

  @keyframes selection-pulse {
    0% {
        filter: opacity(50%)
    }
    50% {
        filter: opacity(100%)
    }
    100% {
        filter: opacity(50%)
    }
  }

  .locked img {
    width: var(--size-selection);
    height: var(--size-selection);
  }

  .locked {
    background: url(../../assets/img/16x16/selection/locked.png);
    background-size: var(--size-selection);
  }
  .opened {
    background: url(../../assets/img/16x16/selection/opened.png);
    background-size: var(--size-selection);
  }
  .selected.locked {
    background: url(../../assets/img/16x16/selection/selected-locked.png);
    background-size: var(--size-selection);
  }
  .selected.opened {
    background: url(../../assets/img/16x16/selection/selected-opened.png);
    background-size: var(--size-selection);
  }
</style>
