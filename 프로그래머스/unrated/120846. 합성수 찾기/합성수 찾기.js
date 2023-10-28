function solution(n) {
    // 소수 구하는 로직
    let a = 2;
    let result = 0;
    while(a <= n) {
        let count = 0;
        for(let i=2; i<=a; ++i) {
            if(a % i === 0) ++count;
        }
        if(count >= 2) ++result;
        ++a;
    }
    return result;
}