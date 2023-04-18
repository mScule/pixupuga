export default function switchExpression<Comparable, Value>(
    value: Comparable | null | undefined,
    cases: [Comparable, Value][],
    defaultValue: Value
): Value {
    for (const c of cases) {
        if (c[0] === value) {
            return c[1]
        }
    }
    return defaultValue;
}
