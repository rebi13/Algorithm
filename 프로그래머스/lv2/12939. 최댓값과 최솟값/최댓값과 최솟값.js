function solution(s) {
    let numArr = s.split(' ').map(a => +a);
    return `${Math.min(...numArr)} ${Math.max(...numArr)}`;
}