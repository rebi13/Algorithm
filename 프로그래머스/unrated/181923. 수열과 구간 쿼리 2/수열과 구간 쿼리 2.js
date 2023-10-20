function solution(arr, queries) {
    const result = [];
    queries.forEach(([a,b,c]) => {
        const array = arr.slice(a, b + 1).filter(x => x > c);
        const length = array.length;
        if(length) result.push(Math.min(...array));
        else result.push(-1);            
    })
    return result;
}