function solution(a, b, c, d) {
    let result = 0;
    const nums = [a, b, c, d];
    const obj = {};
    for (let i = 0; i < 4; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 0;
        } 
        obj[nums[i]] ++;
    }
    
    const data = Object.keys(obj).map(x => +x);
    switch(data.length) {
        case 1: 
                result = +data.join('') * 1111; 
                break;
        case 2: 
                const [p2, q2] = data;
                if(obj[p2] > obj[q2]) result = Math.pow((10 * p2 + q2), 2);
                else if(obj[p2] < obj[q2]) result = Math.pow((10 * q2 + p2), 2);
                else result = (p2 + q2) * Math.abs(p2 - q2);
                break;
        case 3:
                const [p3, q3, r3] = data;
                result = (obj[p3] === 2 ? 1 : p3) * (obj[q3] === 2 ? 1 : q3) * (obj[r3] === 2 ? 1 : r3);
                break;
        case 4:
                result = Math.min(...data);
        default: break;
    }
    return result;
}