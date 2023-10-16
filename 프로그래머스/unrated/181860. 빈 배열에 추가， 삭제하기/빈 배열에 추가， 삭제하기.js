function solution(arr, flag) {
    let answer = [];
    
    flag.forEach((f, i) => {
        if(f) {
            for(let a=0; a < arr[i] * 2; ++a) {
                answer.push(arr[i]);
            }
        }
        else {
            if(arr.length) {
                for(let b=0; b < arr[i]; ++b) {
                     answer.pop();
                }    
            }
        }
    });
    
    return answer;
}