function solution(num) {
    let count = 0;
    while(count <= 500) {
        if(num === 1) return count;
        num % 2 ? num = num * 3 + 1 : num /=2;
        ++count;
    }
    return -1;
}