function solution(array, commands) {
    const result = [];
    commands.forEach(([i, j, k]) => {
        const arr = array.slice(i-1, j).sort((a, b) => a - b);
        result.push(arr[k-1]);
    })
    return result;
}