function solution(n, m) {
    return [getGCD(n, m), getLCM(n, m)];
}

function getGCD(n, m) {
    let num = n > m ? m : n;
    while(!(n % num === 0 && m % num === 0)) {
        num--;
    }
    return num;
}

function getLCM(n, m) {
    let num = n > m ? n : m;
    while(!(num % n === 0 && num % m === 0)) {
        num++;
    }
    return num;
}