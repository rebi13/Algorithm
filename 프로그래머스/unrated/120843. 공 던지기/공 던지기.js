function solution(numbers, k) {
    let idx = 0;
    for(let i=0; i<k; ++i) {
        idx = numbers.length - 1 < idx ? idx - numbers.length + 2 : idx + 2;
    }
    return idx-1;
}