function solution(s){
    const str = s.toLowerCase();
    const p = str.replace(/[^p]/g, "");
    const y = str.replace(/[^y]/g, "");

    return p.length === y.length;
}