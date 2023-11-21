function solution(a, b, n) {
    if(n >= a) {
        return ~~(n/a) * b + solution(a, b, ~~(n/a) * b + n % a);
    }
    return 0;
}
