function solution(order) {
    return [...order.toString()].filter(el => +el % 3 === 0 && +el !== 0).length;
}