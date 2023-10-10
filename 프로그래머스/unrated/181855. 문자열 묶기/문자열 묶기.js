function solution(strArr) {
    const obj = {};
    
    strArr.forEach((s, i) => {
        if(!obj[s.length]) {
            obj[s.length] = 1;
        }
        else {
            obj[s.length]++;
        }
    })
    
    return Math.max.apply(null, Object.values(obj));
}