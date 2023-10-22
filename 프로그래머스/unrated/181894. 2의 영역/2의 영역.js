function solution(arr) {
    const [l, r] = [arr.indexOf(2), arr.lastIndexOf(2)];
    const result = arr.slice(l, r + 1);
    return result.length ? result : [-1];
}