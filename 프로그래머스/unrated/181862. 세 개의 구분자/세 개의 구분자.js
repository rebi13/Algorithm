function solution(myStr) {
    const arr = myStr.split(/[a,b,c]/).filter(x => x);
    return arr.length ? arr : ["EMPTY"];
}