function solution(quiz) {
    let answer = [];
    
    quiz.forEach(q => {
        const [a, b] = q.split(" = ");
        if(eval(a) === +b) answer.push("O")
        else answer.push("X");
    })
    
    return answer;
}