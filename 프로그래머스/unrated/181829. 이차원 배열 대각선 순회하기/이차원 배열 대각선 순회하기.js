function solution(board, k) {
    let sum = 0;
    board.forEach((x, i) => {
        x.forEach((y, j) => {
            if(i + j <= k) sum += y;
        })
    })
    return sum;
}