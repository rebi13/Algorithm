function solution(arr) {
    let num = 1;
    while(arr.length > num) {
        num *= 2;
    }
    
    const arrLen = [...arr].length;
    if(num > arrLen) {
        for(let i=0; i<num-arrLen; ++i) {
            arr.push(0);
        }    
    }
    
    return arr;
}