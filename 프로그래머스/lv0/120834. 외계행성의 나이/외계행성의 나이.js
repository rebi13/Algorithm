function solution(age) {
    const alpha = {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        'i': 8,
        'j': 9
    }
    
    return [...age.toString()].map(v => Object.keys(alpha).find(key => alpha[key] === +v)).join('');
}