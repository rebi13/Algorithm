function solution(numlist, n) {
    const arr = numlist.sort((a,b) => b - a).map(x => x - n).sort((a,b) => Math.abs(a) - Math.abs(b));
    return arr.map(x => x + n);
}