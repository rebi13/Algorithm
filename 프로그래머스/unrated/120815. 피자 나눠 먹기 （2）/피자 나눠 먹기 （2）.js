function solution(n) {
    return LCM(n, 6) / 6;
}


function LCM(n, m) {
    let num = 2;
    while(!(num % n === 0 && num % m === 0)) num++;
    
    return num;
}