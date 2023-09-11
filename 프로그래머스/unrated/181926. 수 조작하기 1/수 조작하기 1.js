function solution(n, control) {
    const data = {
        w: 1,
        s: -1,
        d: 10,
        a: -10
    };
    
    return n + [...control].map(v => data[v]).reduce((acc, cur) => acc + cur);
}