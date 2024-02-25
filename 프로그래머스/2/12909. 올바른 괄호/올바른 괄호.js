function solution(s){
    let isBracket = true;
    const bracket = [];
    
    [...s].forEach(str => {
        if(str === '(') bracket.push(str);
        else {
            if(bracket.length) bracket.pop();
            else isBracket = false;
        }
    })
    return isBracket &&!bracket.length;
}