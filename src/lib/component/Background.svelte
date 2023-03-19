<script lang="ts">
    import { setContext } from "svelte";

    import LevelWorld from "../types/LevelWorld";
    import switchExpression, {
        defaultCase,
        type SwitchExpressionDefault,
    } from "../expression/switchExpression";
    import Context, { type BackgroundContext } from "../types/Context";

    function setBackground(world?: LevelWorld | SwitchExpressionDefault) {
        const htmlRoot = document.querySelector("html");

        if (!htmlRoot) {
            return
        }

        htmlRoot.className =
            "background " +
            switchExpression(
                world,
                [LevelWorld.Island, "island"],
                [LevelWorld.Jungle, "jungle"],
                [LevelWorld.Dungeon, "dungeon"],
                [defaultCase, "aether"]
            );
    }

    setContext<BackgroundContext>(Context.Background, { setBackground });
</script>

<slot />
