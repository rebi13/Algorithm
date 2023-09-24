function solution(i, j, k) {
    return [...Array.from({ length: j-i+1 }, (_, idx) => idx + i).join('')].filter(v => v === k+'').length;
}