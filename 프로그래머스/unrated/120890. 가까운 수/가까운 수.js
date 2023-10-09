function solution(array, n) {
    const sortedArr = array.sort((a,b) => b - a).map(x => x - n).sort((a,b) => Math.abs(a) - Math.abs(b));
    return sortedArr.includes(-sortedArr[0]) ? -sortedArr[0] + n : sortedArr[0] + n;
}