function solution(my_string, overwrite_string, s) {
    let left = my_string.substr(0, s);
    let right = my_string.substr(s);
    let overwriteStr = right.replace(right.substr(0, overwrite_string.length), overwrite_string);
    return left + overwriteStr;
}