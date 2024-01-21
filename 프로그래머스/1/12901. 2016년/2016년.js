function solution(a, b) {
    let year = 2016;
    let date = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    return date[new Date(`2016-${a}-${b}`).getDay()];
}