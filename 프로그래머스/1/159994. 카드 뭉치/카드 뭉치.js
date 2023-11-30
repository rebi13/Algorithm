function solution(cards1, cards2, goal) {
    const result = goal.map(x => { 
        if(x === cards1[0]) {
            cards1.shift();
            return '';
        }
        else if(x === cards2[0]) {
            cards2.shift();
            return '';
        }
        return x;
    });
    return result.filter(x => x).length ? "No" : "Yes";
}