function solution(absolutes, signs) {
    return absolutes.map((x, i) => signs[i] ? x : x * -1)
                    .reduce((acc, cur) => acc + cur, 0);
}