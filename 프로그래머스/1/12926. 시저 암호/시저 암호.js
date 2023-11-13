function solution(s, n) {
    const result = [];
    [...s].forEach(x => {
       result.push(x.trim().length ? setAsciiCodeRange(x, n) : x); 
    });
    // charCodeAt - 문자를 아스키코드로 변환
    // fromCharCode - 아스키코드를 문자로 변환
    return result.join('');
}

function setAsciiCodeRange(s, n) {
    let code = s.charCodeAt() + n;
    if((s.toUpperCase() === s && code > 90) || s.toLowerCase() === s && code > 122) {
        return String.fromCharCode(s.charCodeAt() + n - 26);
    }
    return String.fromCharCode(s.charCodeAt() + n);
}