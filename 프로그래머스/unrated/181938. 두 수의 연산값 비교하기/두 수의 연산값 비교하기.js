function solution(a, b) {
    const ab = +(a+''+b);
    return ab > 2*a*b ? ab : 2*a*b;
}