function solution(s) {
    return (s.length === 4 || s.length === 6) && s.length === s.replace(/[a-zA-Z]/g, "").length;
}