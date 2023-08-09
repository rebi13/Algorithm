function solution(n) {
    return Array(n)
            .fill(1)
            .map((v, i) => (i + 1) * v)
            .filter(v => v % 2 === 1);
}