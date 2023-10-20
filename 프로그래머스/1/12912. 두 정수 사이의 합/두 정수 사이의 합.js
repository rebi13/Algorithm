function solution(a, b) {
    let count = 0;
    if(a === b) return a;
    else if(a < b) for(let i=a; i<=b; ++i) count += i;
    else if(a > b) for(let i=a; i>=b; --i) count += i;
    return count;
}