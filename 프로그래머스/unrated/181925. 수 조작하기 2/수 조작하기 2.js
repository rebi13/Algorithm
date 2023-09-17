function solution(numLog) {
    let arr = Array(numLog.length-1).fill();
    const obj = {
        '1': 'w',
        '-1': 's',
        '10': 'd',
        '-10': 'a'
    }
    
    return arr.map((_, i) => numLog[i+1] - numLog[i]).map(v => obj[v]).join('');
}