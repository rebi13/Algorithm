function solution(board) {
    const mine = [];
    board.forEach((b, i) => {
        b.forEach((m, j) => {
            if(m) mine.push([i, j]);
        });
    });
    
    const over = board.length - 1;
    mine.forEach(m => {
        const [x, y] = m;
        // 왼쪽 상단
        if((x-1 >= 0) && (y-1 >=0)) board[x-1][y-1] = 1;
        // 상단
        if((x-1 >= 0) && (y >= 0)) board[x-1][y] = 1;
        // 오른쪽 상단
        if((x-1 >= 0) && (y+1 <= over)) board[x-1][y+1] = 1;
        // 왼쪽
        if ((x >= 0) && (y-1 >= 0)) board[x][y-1] = 1;
        // 오른쪽
        if ((x >= 0) && (y+1 <= over)) board[x][y+1] = 1;
        // 왼쪽 하단
        if((x+1 <= over) && (y-1 >= 0)) board[x+1][y-1] = 1;
        // 하단
        if((x+1 <= over) && (y >= 0)) board[x+1][y] = 1;
        // 오른쪽 하단
        if((x+1 <= over) && (y+1 <= over)) board[x+1][y+1] = 1;
    })
    
    const result = board.flat().filter(x => x === 0).length;
    
    return result;
}