function solution(n) {
    const arr = new Array(Math.ceil(n/2)).fill(+(n%2) ? 1 : 2).map((v, i) => v + i * 2);
    return n % 2 ? arr.reduce((a,c) => a + c, 0) : arr.reduce((a,c) => a + c*c, 0);
}