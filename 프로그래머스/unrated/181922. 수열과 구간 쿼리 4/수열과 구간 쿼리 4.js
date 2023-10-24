function solution(arr, queries) {
    queries.forEach(([s, e, k]) => {
        arr = arr.map((v,i) => {
            if(i >= s && i<= e) return i % k === 0 ? v + 1 : v;
            else return v;
        });
    })
    return arr;
}