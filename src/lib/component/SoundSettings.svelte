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
    <div>
        <button on:click={() => playMusic.set(!music)}>
            <img
                src={music ? imageChecked : imageUnchecked}
                alt="Checkbox - unchecked"
            />
        </button>
        <p>Music</p>
    </div>

    <div>
        <button on:click={() => playSounds.set(!sounds)}>
            <img
                src={sounds ? imageChecked : imageUnchecked}
                alt="Checkbox - checked"
            />
        </button>
        <p>Sounds</p>
    </div>
</section>

<style>
    section {
        width: var(--size-game-width);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: var(--size-buffer-large);
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img {
        height: calc(var(--size-8x8) / 2);
        width:  calc(var(--size-8x8) / 2);
        image-rendering: pixelated;
    }
    button {
        background: transparent;
        border: none;
        color: var(--color-font);
    }
    p {
        font-size: x-small;
    }
</style>
