function solution(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let row = Array(n).fill(0); 
        row[i] = 1;
        arr.push(row);
    }
    return arr;
}