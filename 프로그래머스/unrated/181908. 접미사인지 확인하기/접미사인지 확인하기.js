function solution(my_string, is_suffix) {
    return +(my_string.substr(my_string.length-is_suffix.length, my_string.length) === is_suffix);
}