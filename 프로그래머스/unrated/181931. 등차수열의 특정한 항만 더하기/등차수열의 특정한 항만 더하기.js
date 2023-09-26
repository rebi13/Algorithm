function solution(a, d, included) {
    return Array(included.length).fill(a)
            .map((v, i) => v + i * d)
            .filter((_,i) => included[i])
            .reduce((acc, cur) => acc + cur);
}