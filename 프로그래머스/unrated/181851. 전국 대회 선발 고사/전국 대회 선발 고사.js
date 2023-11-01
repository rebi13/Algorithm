function solution(rank, attendance) {
    const obj = {};
    const noAttend = rank.filter((r, i) => !attendance[i]);
    rank.forEach((r, i) => {
        obj[r] = i;
    });
    noAttend.forEach(x => {
        delete obj[x];
    });
    
    const [a, b, c] = Object.values(obj).slice(0, 3);
    
    return 10000 * a + 100 * b + c;
}