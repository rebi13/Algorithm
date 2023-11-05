function solution(x, n) {
    return Array(n).fill(x).map((y, i) => y * (i+1));
}