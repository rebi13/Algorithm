function solution(n) {
    return factorial(1, n, 1);
}

const factorial = (target, n, i) => {
    if(n < target) {
        return i-1;
    }
    return factorial(target * ++i, n, i);
}