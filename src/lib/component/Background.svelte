<script lang="ts">
    import { setContext } from "svelte";

    import LevelWorld from "../types/LevelWorld";
    import switchExpression from "../expression/switchExpression";
    import Context, { type BackgroundContext } from "../types/Context";

    function setBackground(world?: LevelWorld | null) {
        const htmlRoot = document.querySelector("html");

        if (!htmlRoot) {
            return;
        }

        htmlRoot.className =
            "background " +
            switchExpression(
                world,
                [
                    [LevelWorld.Island, "island"],
                    [LevelWorld.Jungle, "jungle"],
                    [LevelWorld.Dungeon, "dungeon"],
                ],
                "aether"
            );
    }

    setContext<BackgroundContext>(Context.Background, { setBackground });
</script>

<slot />
