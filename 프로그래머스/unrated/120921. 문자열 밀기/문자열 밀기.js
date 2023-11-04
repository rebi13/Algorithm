function solution(A, B) {
    let count = 0;
    if(A === B) return 0;
    
    let Aarr = [...A];
    for(let i=1; i < A.length; ++i) {
        Aarr.unshift(Aarr.pop());
        if(Aarr.join('') === B) return i;
    }
    
    return -1;
}