function solution(n) {
    const answer = Array.from(Array(n), () => new Array(n));
    
    let row = 0;
    let col = -1;
    let rowD = n;
    let colD = n-1;
    
    for(let i=1; i<=n*n; i++) {
        if(row > col && rowD > colD) {
            for(let j=i; j<i+rowD; j++) {
                answer[row][++col] = j;
            }
            i += --rowD;
        }

        else if(col > row) {
            for(let j=i; j<i+colD; j++) {
                answer[++row][col] = j;
            }
            i += --colD;
        }
        
        else if(row == col) {
            for(let j=i; j<i+rowD; j++) {
                answer[row][--col] = j;
            }
            i += --rowD;
        }

        else if(row > col && rowD == colD) {
            for(let j=i; j<i+colD; j++) {
                answer[--row][col] = j;
            }
            i += --colD;
        }
    }
    return answer;
}