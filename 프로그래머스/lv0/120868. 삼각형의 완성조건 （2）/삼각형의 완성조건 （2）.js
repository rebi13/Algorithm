function solution(sides) {
    const [n1, n2] = sides.sort((a,b) => a - b);
    return 2 * n1 - 1;
}