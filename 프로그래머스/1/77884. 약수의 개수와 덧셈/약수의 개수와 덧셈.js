function solution(left, right) {
    let result = 0;
    for(let i=left; i<=right; ++i) {
        const arr = getFactors(i);
        result += arr.length % 2 ? (-1) * i : i;
    }
    return result;
}

function getFactors(num) {
    const arr = [];
    let i = 1;
    while(i <= num / 2) {
        if(num % i === 0) arr.push(i);
        ++i;
    }
    arr.push(num);
    return arr;
}