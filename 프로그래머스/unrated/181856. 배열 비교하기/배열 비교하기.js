function solution(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : arr1.length < arr2.length ? -1 : 0;
    }
    else {
        const sum1 = arr1.reduce((a,c) => a + c);
        const sum2 = arr2.reduce((a,c) => a + c);
        return sum1 > sum2 ? 1 : sum1 < sum2 ? -1 : 0;
    }
}