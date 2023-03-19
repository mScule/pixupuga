export type SwitchExpressionDefault = null;
export const defaultCase:SwitchExpressionDefault = null;

export default function switchExpression<Comparable, Value>(
    value: Comparable,
    ...cases: [Comparable | SwitchExpressionDefault, Value][]
): Value {
    for (const c of cases) {
        if (c[0] === defaultCase || value === c[0]) {
            return c[1];
        }
    }
}
