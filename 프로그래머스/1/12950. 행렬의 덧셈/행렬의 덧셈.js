function solution(arr1, arr2) {
    const result = [];
    arr1.forEach((arr, i) => {
        const row = [];
        arr.forEach((a, j) => {
            row.push(a + arr2[i][j]);
        });
        result.push(row);
    })
    return result;
}