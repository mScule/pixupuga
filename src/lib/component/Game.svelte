<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    import type Level from "../types/Level";
    import StackLevel from "../types/StackLevel";
    import Movement from "../types/Movement";
    import TileType from "../types/TileType";

    import { isInsideGrid, moveHigherTileInGrid } from "../game/Grid";
    import { isWalkable } from "../game/Tile";
    import readLevel from "../game/LevelReader";

    import GameDisplay from "./GameDisplay.svelte";
    import Title from "./Title.svelte";
    import Controls from "./Controls.svelte";

    export let title: string;
    export let level: Level;

    export let handleWinning: () => void;
    export let handleExit: () => void;

    let { playerLocation, trapLocations, rollerLocations, grid } =
        readLevel(level);
    let lastMovement: Movement = Movement.None;

    let points = 0;
    let boxes = 0;
    let died = false;
    let showableHint: string | null = null;

    let boulders: ({ location: number; movement: Movement } | null)[] = [];
    let boulderInterval = null;

    let trapSpikesInterval = null;
    let trapSpikeSoundUpDown = false;

    let rollersInterval = null;

    function getLowerTileAt(location: number): TileType {
        return isInsideGrid(grid, location)
            ? grid[location][StackLevel.Lower]
            : TileType.Void;
    }

    function setLowerTileAt(location: number, tile: TileType) {
        if (isInsideGrid(grid, location))
            grid[location][StackLevel.Lower] = tile;
    }

    function getHigherTileAt(location: number): TileType {
        return isInsideGrid(grid, location)
            ? grid[location][StackLevel.Higher]
            : TileType.Void;
    }

    function setHigherTileAt(location: number, tile: TileType) {
        if (isInsideGrid(grid, location))
            grid[location][StackLevel.Higher] = tile;
    }

    function tileIsNotVoidAt(location: number): boolean {
        return getHigherTileAt(location) !== TileType.Void;
    }

    function movePlayer(movement: Movement) {
        lastMovement = movement;

        const oldPlayerLocation = playerLocation;
        const newPlayerLocation = moveHigherTileInGrid(
            grid,
            playerLocation,
            movement
        );

        const higherTileAtNewPlayerLocation =
            getHigherTileAt(newPlayerLocation);
        const lowerTileAtNewPlayerLocation = getLowerTileAt(newPlayerLocation);
        const lowerTileAtOldPlayerLocation = getLowerTileAt(oldPlayerLocation);

        function handleBoxInteraction() {
            const newBoxLocation = moveHigherTileInGrid(
                grid,
                newPlayerLocation,
                movement
            );

            const newBoxLocationIsOutsideTheGrid =
                newBoxLocation === newPlayerLocation;
            const lowerTileAtNewBoxLocation = getLowerTileAt(newBoxLocation);

            if (
                newBoxLocationIsOutsideTheGrid ||
                tileIsNotVoidAt(newBoxLocation)
            ) {
                return false;
            }

            switch (lowerTileAtNewBoxLocation) {
                case TileType.LowerBoulderSunken:
                    setLowerTileAt(
                        newBoxLocation,
                        TileType.LowerBoxOnTopOfSunkenBoulder
                    );

                    return true;

                case TileType.Void:
                    setLowerTileAt(newBoxLocation, TileType.LowerBox);

                    return true;

                case TileType.LowerTrapSpikesOn:
                    return true;
            }

            setHigherTileAt(newBoxLocation, TileType.UpperBox);

            return true;
        }

        if (
            isWalkable(lowerTileAtNewPlayerLocation) &&
            higherTileAtNewPlayerLocation !== TileType.UpperSolid &&
            higherTileAtNewPlayerLocation !== TileType.UpperBoulderMoving
        ) {
            if (
                higherTileAtNewPlayerLocation === TileType.UpperBoulder &&
                !pushBoulder(newPlayerLocation, movement)
            ) {
                return;
            }

            if (
                higherTileAtNewPlayerLocation === TileType.UpperBox &&
                !handleBoxInteraction()
            ) {
                return;
            }

            if (lowerTileAtNewPlayerLocation === TileType.LowerHintUnused) {
                showableHint = level.hint;
                setLowerTileAt(newPlayerLocation, TileType.LowerHintUsed);
            } else {
                showableHint = null;
            }

            switch (lowerTileAtNewPlayerLocation) {
                case TileType.LowerTrapSpikesOn:
                case TileType.LowerCursed:
                    died = true;
                    break;
            }

            switch (lowerTileAtOldPlayerLocation) {
                case TileType.LowerBox:
                    setLowerTileAt(oldPlayerLocation, TileType.Void);

                    break;

                case TileType.LowerBoxOnTopOfSunkenBoulder:
                    setLowerTileAt(
                        oldPlayerLocation,
                        TileType.LowerBoulderSunken
                    );

                    break;
            }

            switch (higherTileAtNewPlayerLocation) {
                case TileType.CollectablePointOne:
                    points++;

                    break;

                case TileType.CollectablePointFive:
                    points += 5;

                    break;

                case TileType.CollectableBox:
                    boxes++;

                    break;
            }

            setHigherTileAt(oldPlayerLocation, TileType.Void);
            setHigherTileAt(newPlayerLocation, TileType.Player);

            playerLocation = newPlayerLocation;
        }
    }

    function spawnBox() {
        if (lastMovement === Movement.None || boxes <= 0) {
            return;
        }

        const spawnPosition = moveHigherTileInGrid(
            grid,
            playerLocation,
            lastMovement
        );

        const higherTileAtSpawnPosition = getHigherTileAt(spawnPosition);
        const lowerTileAtSpawnPosition = getLowerTileAt(spawnPosition);

        if (
            isInsideGrid(grid, spawnPosition) &&
            higherTileAtSpawnPosition === TileType.Void &&
            (lowerTileAtSpawnPosition === TileType.LowerSolid ||
                lowerTileAtSpawnPosition === TileType.Void)
        ) {
            boxes--;

            if (lowerTileAtSpawnPosition === TileType.Void) {
                setLowerTileAt(spawnPosition, TileType.LowerBox);
            } else {
                setHigherTileAt(spawnPosition, TileType.UpperBox);
            }
        }
    }

    function pushBoulder(pusher: number, movement: Movement) {
        const newBoulderLocation = moveHigherTileInGrid(grid, pusher, movement);

        const newBoulderLocationIsOutsideTheGrid =
            newBoulderLocation === pusher;
        const lowerTileAtNewBoulderLocation =
            getLowerTileAt(newBoulderLocation);

        if (
            newBoulderLocationIsOutsideTheGrid ||
            tileIsNotVoidAt(newBoulderLocation)
        ) {
            return false;
        }

        switch (lowerTileAtNewBoulderLocation) {
            case TileType.LowerTrapSpikesOn:
                return true;

            case TileType.Void:
                setLowerTileAt(newBoulderLocation, TileType.LowerBoulderSunken);

                return true;

            case TileType.LowerBoulderSunken:
                setLowerTileAt(newBoulderLocation, TileType.LowerBoulderAfloat);

                return true;

            default:
                setHigherTileAt(
                    newBoulderLocation,
                    TileType.UpperBoulderMoving
                );
                boulders = [
                    ...boulders,
                    {
                        location: newBoulderLocation,
                        movement: movement,
                    },
                ];
                return true;
        }
    }

    function moveBoulder(location: number, movement: Movement) {
        const newBoulderLocation = moveHigherTileInGrid(
            grid,
            location,
            movement
        );
        const newLocationIsOutsideGrid = newBoulderLocation === location;

        const higherTileAtNewBoulderLocation =
            getHigherTileAt(newBoulderLocation);
        const lowerTileAtNewBoulderLocation =
            getLowerTileAt(newBoulderLocation);

        function removeFromMovingBoulders() {
            boulders[
                boulders.findIndex(
                    (boulder) =>
                        boulder &&
                        boulder.location === location &&
                        boulder.movement === movement
                )
            ] = null;
        }

        setHigherTileAt(location, TileType.Void);

        switch (higherTileAtNewBoulderLocation) {
            case TileType.Player:
                died = true;
                break;
        }

        if (
            newLocationIsOutsideGrid ||
            higherTileAtNewBoulderLocation !== TileType.Void
        ) {
            setHigherTileAt(location, TileType.UpperBoulder);
            removeFromMovingBoulders();

            return;
        }

        switch (lowerTileAtNewBoulderLocation) {
            case TileType.LowerTrapSpikesOn:
                removeFromMovingBoulders();

                return;

            case TileType.Void:
                setLowerTileAt(newBoulderLocation, TileType.LowerBoulderSunken);
                removeFromMovingBoulders();

                return;

            case TileType.LowerBoulderSunken:
                setLowerTileAt(newBoulderLocation, TileType.LowerBoulderAfloat);
                removeFromMovingBoulders();

                return;
        }

        setHigherTileAt(newBoulderLocation, TileType.UpperBoulderMoving);

        const boulderIndex = boulders.findIndex(
            (boulder) =>
                boulder &&
                boulder.location === location &&
                boulder.movement === movement
        );

        if (boulderIndex !== -1 && boulders[boulderIndex]) {
            boulders[boulderIndex].location = newBoulderLocation;
        }
    }

    const handleUp = () => movePlayer(Movement.Up);
    const handleDown = () => movePlayer(Movement.Down);
    const handleLeft = () => movePlayer(Movement.Left);
    const handleRight = () => movePlayer(Movement.Right);

    function handleActionPrimary() {
        if (died) {
            const restartedLevel = readLevel(level);
            playerLocation = restartedLevel.playerLocation;
            grid = restartedLevel.grid;
            trapLocations = restartedLevel.trapLocations;
            died = false;
            points = 0;
            boxes = 0;
        } else if (points < level.winningPoints) {
            spawnBox();
        } else {
            handleWinning();
        }
    }

    const handleActionSecondary = () => handleExit();

    function updateBoulders() {
        if (boulders.length === 0) {
            return;
        }

        for (const boulder of boulders) {
            if (boulder !== null) {
                moveBoulder(boulder.location, boulder.movement);
            }
        }

        boulders = [...boulders.filter((boulder) => boulder !== null)];
    }

    function updateTraps() {
        if (trapLocations.length === 0) {
            return;
        }

        for (const trap of trapLocations) {
            const lowerTileAtTrap = getLowerTileAt(trap);
            const higherTileAtTrap = getHigherTileAt(trap);

            if (lowerTileAtTrap === TileType.LowerTrapSpikesOff) {
                setLowerTileAt(trap, TileType.LowerTrapSpikesOn);
                if (higherTileAtTrap === TileType.Player) {
                    died = true;
                } else if (higherTileAtTrap !== TileType.Void) {
                    setHigherTileAt(trap, TileType.Void);
                }
            } else {
                setLowerTileAt(trap, TileType.LowerTrapSpikesOff);
            }
        }

        trapSpikeSoundUpDown = !trapSpikeSoundUpDown;

        if (died) {
            return;
        }
    }

    function handleRolling(rollerLocation: number, movement: Movement) {
        const item = getHigherTileAt(rollerLocation);

        switch (item) {
            case TileType.Player: {
                const newLocation = moveHigherTileInGrid(
                    grid,
                    rollerLocation,
                    movement
                );
                if (newLocation === rollerLocation) {
                    return;
                }

                if (getHigherTileAt(newLocation) !== TileType.Void) {
                    return;
                }

                setHigherTileAt(rollerLocation, TileType.Void);
                setHigherTileAt(newLocation, item);

                playerLocation = newLocation;
            }
            case TileType.UpperBox:
            case TileType.UpperSolid: {
                const newLocation = moveHigherTileInGrid(
                    grid,
                    rollerLocation,
                    movement
                );
                if (newLocation === rollerLocation) {
                    return;
                }

                if (getHigherTileAt(newLocation) !== TileType.Void) {
                    return;
                }

                setHigherTileAt(rollerLocation, TileType.Void);
                setHigherTileAt(newLocation, item);
                break;
            }
            case TileType.UpperBoulder:
                pushBoulder(rollerLocation, movement);
                setHigherTileAt(rollerLocation, TileType.Void);
                break;

            case TileType.UpperBoulderMoving:
                boulders.find(
                    (boulder) => boulder.location === rollerLocation
                ).movement = movement;
                break;
        }
    }

    function updateRollers() {
        if (rollerLocations.length === 0) {
            return;
        }

        for (const roller of rollerLocations) {
            const lowerTileAtRoller = getLowerTileAt(roller);

            switch (lowerTileAtRoller) {
                case TileType.LowerRollerUpOff:
                    setLowerTileAt(roller, TileType.LowerRollerUpOn);
                    handleRolling(roller, Movement.Up);
                    break;
                case TileType.LowerRollerUpOn:
                    setLowerTileAt(roller, TileType.LowerRollerUpOff);
                    break;

                case TileType.LowerRollerDownOff:
                    setLowerTileAt(roller, TileType.LowerRollerDownOn);
                    handleRolling(roller, Movement.Down);
                    break;
                case TileType.LowerRollerDownOn:
                    setLowerTileAt(roller, TileType.LowerRollerDownOff);
                    break;

                case TileType.LowerRollerLeftOff:
                    setLowerTileAt(roller, TileType.LowerRollerLeftOn);
                    handleRolling(roller, Movement.Left);
                    break;
                case TileType.LowerRollerLeftOn:
                    setLowerTileAt(roller, TileType.LowerRollerLeftOff);
                    break;

                case TileType.LowerRollerRightOff:
                    setLowerTileAt(roller, TileType.LowerRollerRightOn);
                    handleRolling(roller, Movement.Right);
                    break;
                case TileType.LowerRollerRightOn:
                    setLowerTileAt(roller, TileType.LowerRollerRightOff);
                    break;
            }
        }
    }

    onMount(() => {
        boulderInterval = setInterval(updateBoulders, 200);
        trapSpikesInterval = setInterval(updateTraps, 1000);
        rollersInterval = setInterval(updateRollers, 500);
    });

    onDestroy(() => {
        boulderInterval !== null && clearInterval(boulderInterval);
        trapSpikesInterval !== null && clearInterval(trapSpikesInterval);
        rollerLocations !== null && clearInterval(rollersInterval);
    });
</script>

<GameDisplay
    title={level.name}
    {points}
    {boxes}
    {died}
    hint={showableHint}
    winningPoints={level.winningPoints}
    world={level.world}
    winningText={level.winningText}
    stacks={grid}
/>
<Title text={`${title}: ${level.name}`} />
<Controls
    {handleUp}
    {handleDown}
    {handleLeft}
    {handleRight}
    {handleActionPrimary}
    handleActionSecondary={!died && points < level.winningPoints
        ? handleActionSecondary
        : null}
/>
