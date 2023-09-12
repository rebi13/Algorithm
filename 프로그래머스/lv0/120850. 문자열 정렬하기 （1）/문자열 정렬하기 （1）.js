function solution(my_string) {
    return [...my_string].filter(v => !isNaN(v)).sort((a,b) => a - b).map(v => +v);
}