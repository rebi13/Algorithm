function solution(my_string) {
    return my_string.replace(/\D/g, " ").split(" ").filter(v => v).reduce((a,c) => a + +c, 0);
}