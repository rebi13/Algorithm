function solution(a, b) {
    let denominator = b / gcd(a,b);

    while(denominator % 2 === 0){
        denominator /= 2;
    }

    while(denominator % 5 === 0){
        denominator /= 5;
    }

    return denominator === 1 ? 1 : 2
}

function gcd(n1, n2) {
    let num = n1 > n2 ? n1 : n2;
    
    while(!(n1 % num === 0 && n2 % num === 0)) --num;
    
    return num;
}