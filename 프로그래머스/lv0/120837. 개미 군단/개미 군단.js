function solution(hp) {
    let a = Math.floor(hp / 5);
    let remain = hp % 5;
    let b = Math.floor(remain / 3);
    remain = remain % 3;
    let c = Math.floor(remain / 1);
    return a + b + c;
}