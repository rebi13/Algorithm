function solution(numer1, denom1, numer2, denom2) {
    const lcmNum = lcm(denom1, denom2);
    const [a, b] = [lcmNum * numer1 / denom1 + lcmNum * numer2 / denom2, lcmNum];
    const gcdNum = gcd(a, b);
    
    return [a / gcdNum, b / gcdNum];
}

function gcd(num1, num2) {
    let num = num1 > num2 ? num2 : num1;
    while(!(num1 % num === 0 && num2 % num === 0)) {
        --num;
    }
    return num;
}

function lcm(num1, num2) {
    let num = num1 > num2 ? num1 : num2;
    while(!(num % num1 === 0 && num % num2 === 0)) {
        ++num;
    }
    return num;
}