function solution(num, k) {
    const idx = num.toString().indexOf(k);
    return idx > -1 ? idx + 1 : idx;
}