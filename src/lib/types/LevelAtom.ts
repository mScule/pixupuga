enum LevelAtom {
    // Static
    Void = ".",
    Solid = "s",

    // Dynamic
    Box = "b",
    Boulder = "r",
    BoulderAfloat = "R",
    Player = "p",
    TrapSpikesOff = "t",
    TrapSpikesOn = "T",
    Cursed = "c",

    // Collectable
    CollectableBox = "B",
    CollectableOne = "1",
    CollectableFive = "5",
}

export default LevelAtom;
