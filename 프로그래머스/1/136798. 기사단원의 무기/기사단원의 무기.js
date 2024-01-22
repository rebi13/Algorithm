function solution(number, limit, power) {
    let arr = [];
    for(let i=1; i<=number; ++i) {
        const attack = getDivisor(i);
        arr.push(attack > limit ? power : attack);
    }
    return arr.reduce((a,c) => a + c, 0);
}

function getDivisor(number) {
    let count = 0;
    for(let i=1; i*i <= number; ++i) {
        if(i*i === number) ++count;
        else if(number % i === 0) count += 2;
    }
    return count;
}