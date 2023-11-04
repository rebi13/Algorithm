function solution(num, total) {
    let result = [];
    let target = ~~(total/num);
    let div = num % 2 ? 0 : 1;
    for(let i = target - ~~(num / 2) + div; i <= target + ~~(num / 2); ++i) {
        result.push(i);
    }
    return result;
}