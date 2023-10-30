function solution(arr) {
    let numArr1 = arr;
    let numArr2 = arr.map(x => (x >= 50 && x % 2 === 0 ? x / 2 : x < 50 && x % 2 === 1 ? x * 2 + 1 : x));
    let i = 0;
    
    while(check(numArr1, numArr2)) {
        numArr1 = numArr2;
        numArr2 = numArr2.map(x => (x >= 50 && x % 2 === 0 ? x / 2 : x < 50 && x % 2 === 1 ? x * 2 + 1 : x));
        i++;
    }
    return i;
}

function check(arr1, arr2) {
    if(checkSum(arr1, arr2)) return false;
    return true;
    
    function checkSum(arr1, arr2) {
        return (arr1.every((x, i) => x === arr2[i]));
    }
}