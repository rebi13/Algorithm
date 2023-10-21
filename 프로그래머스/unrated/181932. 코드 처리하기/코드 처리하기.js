function solution(code) {
    let ret = "";
    let mode = false; // false = 0, true = 1
    [...code].forEach((c, i) => {
        if(mode) {
            if(c === "1") mode = !mode;
            else ret += i % 2 ? c : ""; 
        }
        else {
            if(c === "1") mode = !mode;
            else ret += i % 2 ? "" : c;
        }
    })
    return ret.length ? ret : "EMPTY";
}