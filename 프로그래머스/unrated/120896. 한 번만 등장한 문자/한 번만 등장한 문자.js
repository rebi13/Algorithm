function solution(s) {
    const obj = {};
    [...s].forEach(x => {
        if(!Object.keys(obj).includes(x)) obj[x] = 0;
        obj[x]++;
    });
    return Object.entries(obj).filter(([_, num]) => num === 1).map(([key, value]) => key).sort().join('');
}