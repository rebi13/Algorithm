function solution(arr, divisor) {
    const array = arr.filter(x => x % divisor === 0);
    return array.length ? array.sort((a,b) => a - b) : [-1];
}