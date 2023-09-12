function solution(my_string) {
    return [...my_string].map(v => v.charCodeAt() >= 97 ? v.toUpperCase() : v.toLowerCase()).join('');
}