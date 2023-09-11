function solution(start, end) {
    return Array(start-end+1).fill().map((v, i) => start-i);
}