function solution(polynomial) {
    const obj = {
        'x': 0,
        '': 0
    };
    
    const arr = [];
    
    let data = polynomial.replaceAll(" ", "").split("+");
    data.forEach(d => {
        if(d.indexOf('x') > -1) {
            obj['x'] += Number(d.replace('x', '').length > 0 ? d.replace('x', '') : '1');
        }
        else {
            obj[''] += +d;
        }
    });
    
    Object.keys(obj).forEach(x => {
        if(obj[x] > 0) arr.push((obj[x] > 1 ? obj[x] : x.length > 0 ? '' : 1) + x);
    });
    
    return arr.join(' + ');
}