function solution(a, b) {
    let answer = 0;
    a.forEach((d, i) => {
        answer += d * b[i];
    })
    return answer;
}