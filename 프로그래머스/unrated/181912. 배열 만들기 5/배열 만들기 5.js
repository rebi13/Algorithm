function solution(intStrs, k, s, l) {
    const numArr = [];
    intStrs.forEach(intStr => {
        const num = +intStr.substr(s, l);
        if(num > k) numArr.push(num);
    })
    return numArr;
}