function solution(n, k) {
    const arr = Array(~~(n/k)).fill(k);
    return arr.map((v, i) => v * (i+1));
}