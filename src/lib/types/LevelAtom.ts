enum LevelAtom {
    // Static
    Void   = ".",
    Solid  = "s",
    Cursed = "c",

    // Dynamic
    Box           = "b",
    Boulder       = "r",
    BoulderAfloat = "R",
    Player        = "p",
    TrapSpikesOff = "t",
    TrapSpikesOn  = "T",

    RollerUpOff    = "k",
    RollerDownOff  = "j",
    RollerLeftOff  = "h",
    RollerRightOff = "l",

    RollerUpOn     = "K",
    RollerDownOn   = "J",
    RollerLeftOn   = "H",
    RollerRightOn  = "L",


    // Collectable
    CollectableBox  = "B",
    CollectableOne  = "1",
    CollectableFive = "5",
}

export default LevelAtom;
