function solution(arr) {
    const [x, y] = [arr.length, arr[0].length];
    if(x === y) return arr;
    else if (x > y) {
        for(let i=0; i<arr.length; ++i) {
            for(let j=0; j<x-y; ++j) {
                arr[i].push(0);
            }
        }
    }
    else {
        for(let i=0; i<y-x; ++i) {
            arr.push(Array(y).fill(0));
        }
    }
    
    return arr;
}