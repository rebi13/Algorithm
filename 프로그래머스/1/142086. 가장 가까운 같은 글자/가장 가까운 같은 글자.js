function solution(s) {
    const indexObj = {};
    const result = [];
    [...s].forEach((str, i) => {
        if(indexObj[str] === undefined) {
            result.push(-1);
        }
        else {
            result.push(i - indexObj[str]);
        }
        indexObj[str] = i;
    })
    return result;
}