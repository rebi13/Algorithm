function solution(n) {
    const answer = [];
    let num = 2;
    while(num <= n) {
        if(n % num === 0) {
            answer.push(num);
            n /= num;
            num = 2;
        }
        else {
            num++;
        }
    }
    return [...new Set(answer)];
}