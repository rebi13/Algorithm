function solution(n) {
    let num = 1;
    while(n >= num) {
        ++num;
        if(n % num === 1) break;
    }
    return num;
}