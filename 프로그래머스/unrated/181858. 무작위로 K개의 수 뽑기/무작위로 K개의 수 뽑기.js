function solution(arr, k) {
    const result = [...new Set(arr)];
    const length = result.length;
    if(result.length >= k) return result.slice(0, k);
    
    result.length = k;
    return result.fill(-1, length, k);
}