enum TileType {
    Void,
    Player,

    LowerBox,
    LowerBoxOnTopOfSunkenBoulder,
    LowerSolid,
    LowerBoulderSunken,
    LowerBoulderAfloat,
    LowerTrapSpikesOff,
    LowerTrapSpikesOn,
    LowerCursed,

    LowerRollerUpOff,
    LowerRollerUpOn,
    LowerRollerDownOff,
    LowerRollerDownOn,
    LowerRollerLeftOff,
    LowerRollerLeftOn,
    LowerRollerRightOff,
    LowerRollerRightOn,

    LowerHintUnused,
    LowerHintUsed,

    UpperBox,
    UpperSolid,
    UpperBoulder,
    UpperBoulderMoving,

    CollectablePointOne,
    CollectablePointFive,
    CollectableBox
}

export default TileType;
