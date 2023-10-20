function solution(arr) {
    const min = Math.min(...arr);
    const scaledArr = arr.filter(x => x !== min);
    return scaledArr.length ? scaledArr : [-1];
}