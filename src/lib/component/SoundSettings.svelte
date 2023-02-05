<script lang="ts">
    import imageChecked from "../../assets/img/8x8/form/checkbox/checked.png";
    import imageUnchecked from "../../assets/img/8x8/form/checkbox/unchecked.png";

    import { playSounds, playMusic } from "../stores/SoundSettings";

    let sounds = false;
    let music = false;

    playSounds.subscribe((value) => (sounds = value));
    playMusic.subscribe((value) => (music = value));
</script>

<slot />

<section>
    <p>Music:</p>
    <button on:click={() => playMusic.set(!music)}>
        <img
            src={music ? imageChecked : imageUnchecked}
            alt="Checkbox - unchecked"
        />
    </button>

    <p>Sounds:</p>
    <button on:click={() => playSounds.set(!sounds)}>
        <img
            src={sounds ? imageChecked : imageUnchecked}
            alt="Checkbox - checked"
        />
    </button>
</section>

<style>
    section {
        width: var(--size-game-width);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    img {
        height: var(--size-8x8);
        width: var(--size-8x8);
        image-rendering: pixelated;
    }
    button {
        background: transparent;
        border: none;
        color: var(--color-font);
    }
</style>
