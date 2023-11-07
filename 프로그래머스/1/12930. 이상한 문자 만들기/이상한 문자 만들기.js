function solution(s) {
    let a = s.split(' ');
    return a.map(x => [...x].map((y, i) => i % 2 ? y.toLowerCase() : y.toUpperCase()).join('')).join(' ');
}