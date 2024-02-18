function solution(s) {
    return binaryTransform(s, 0, 0);
}

function binaryTransform(s, cnt, zeroCnt) {
    if(s !== "1") {
        const newS = s.replace(/0/g, '').length;
        return binaryTransform(newS.toString(2), cnt+1, zeroCnt+(s.length - newS))
    }
    return [cnt, zeroCnt];
}