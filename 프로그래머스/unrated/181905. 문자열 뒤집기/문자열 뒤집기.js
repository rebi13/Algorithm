function solution(my_string, s, e) {
    const myStr = my_string.substr(s, e-s+1);
    const result = my_string.replace(myStr, [...myStr].reverse().join(''));
    return result;
}