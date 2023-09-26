function solution(arr, queries) {
    queries.forEach(v => {
        let [a, b] = v;
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    })
    return arr;
}