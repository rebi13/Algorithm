function solution(n, arr1, arr2) {
    const result = Array.from({ length: n }, () => Array(n).fill(" "));
    const mapbinary1 = arr1.map(x => String(x.toString(2)).padStart(n, "0"));
    const mapbinary2 = arr2.map(x => String(x.toString(2)).padStart(n, "0"));
    const map1 = mapbinary1.map(x => [...x].map(y => +y ? "#" : " ").join(''));
    const map2 = mapbinary2.map(x => [...x].map(y => +y ? "#" : " ").join(''));
    map1.forEach((mArr, i) => {
        [...mArr].forEach((m, j) => {
            if(m.trim().length) result[i][j] = m;
        });
    });
    map2.forEach((mArr, i) => {
        [...mArr].forEach((m, j) => {
            if(m.trim().length) result[i][j] = m;
        });
    });
    
    return result.map(x => x.join(''));
}