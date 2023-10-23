function solution(balls, share) {
    return BigInt(Math.round(getFactorial(balls) / (getFactorial(balls-share) * getFactorial(share))));
}

const getFactorial = (n) => {
    if(n > 1) {
        return n * getFactorial(n-1);
    }
    return 1;
}

