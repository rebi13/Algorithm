function solution(d, budget) {
    let depart = d.sort((a,b) => a - b).filter(v => {
        if(budget - v >= 0) {
            budget -= v;
            return true;
        }
        return false;
    });
    
    return depart.length;
}