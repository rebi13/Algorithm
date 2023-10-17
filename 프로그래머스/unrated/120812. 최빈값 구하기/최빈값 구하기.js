function solution(array) {
    const data = {};
    
    array.forEach(num => {
        if(!Object.keys(data).includes(num.toString())) data[num] = 0;
        data[num]++;
    });
    
    const dataValues = Object.values(data).map(x => +x).sort((a, b) => b - a);
    if(dataValues[0] === dataValues[1]) return -1;
    
    const maxVal = Math.max(...dataValues);
    return +Object.keys(data).find(key => data[key] === +maxVal);
}