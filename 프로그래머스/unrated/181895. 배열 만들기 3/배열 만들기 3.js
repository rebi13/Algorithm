function solution(arr, intervals) {
    const arr1 = arr.filter((_, i) => i >= intervals[0][0] && i <= intervals[0][1]);
    const arr2 = arr.filter((_, i) => i >= intervals[1][0] && i <= intervals[1][1]);
    return [...arr1, ...arr2];
}