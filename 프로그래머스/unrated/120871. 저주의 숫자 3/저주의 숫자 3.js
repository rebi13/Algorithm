function solution(n) {
    let result = 1;
    
    for(let i = 1; i < n; ++i) {
        ++result;
        while(result % 3 === 0 || result.toString().indexOf('3') > -1) {
            ++result;
        }
    }
    
    return result;
}