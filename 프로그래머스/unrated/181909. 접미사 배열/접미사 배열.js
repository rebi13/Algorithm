function solution(my_string) {
    let arr = Array(my_string.length).fill('');
    return arr.map((_, i) => my_string.substr(i)).sort();
}