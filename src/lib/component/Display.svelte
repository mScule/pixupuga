<section>
    <slot />
</section>

<style>
    section {
        background-color: var(--color-game);

        min-width: var(--size-game-width);
        max-width: var(--size-game-width);
        width: var(--size-game-width);

        min-height: var(--size-game-height);
        max-height: var(--size-game-height);
        height: var(--size-game-height);

        padding-top: var(--size-buffer-small);
        padding-bottom: calc(var(--size-buffer-small) * 3);
    }
</style>
