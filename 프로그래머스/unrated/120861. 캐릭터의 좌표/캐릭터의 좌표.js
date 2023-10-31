function solution(keyinput, board) {
    let [x, y] = [0, 0];
    let [xBoard, yBoard] = board;
    xBoard = (xBoard - 1) / 2;
    yBoard = (yBoard - 1) / 2;
    const direction = {
        "left": [-1, 0],
        "right": [1, 0],
        "up": [0, 1],
        "down": [0, -1]
    }
    keyinput.forEach(key => {
        let [xKey, yKey] = direction[key];
        if(x === xBoard && xKey > 0) xKey = 0;
        else if(x === -xBoard && xKey < 0) xKey = 0;
        else if(y === yBoard && yKey > 0) yKey = 0;
        else if(y === -yBoard && yKey < 0) yKey = 0;
        x += xKey;
        y += yKey;
    })
    return [x, y];
}