function solution(q, r, code) {
    return [...code].map((e, i) => i % q === r ? e : '').join('');
}