function solution(ineq, eq, n, m) {
    return +eval(`${n} ${ineq}${eq === "!" ? "" : eq} ${m}`);
}