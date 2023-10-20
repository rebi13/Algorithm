function solution(n) {
    if(n === 0 || n === 1) return n;
    let result = [1];
    for(let i=2; i<=n/2; i++) {
        if(n % i === 0) result.push(i);
    }
    result.push(n);
    return result.reduce((a, c) => a + c);
}