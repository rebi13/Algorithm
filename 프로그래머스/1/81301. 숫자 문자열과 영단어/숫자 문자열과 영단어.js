function solution(s) {
    const numberArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    numberArr.forEach((i,idx)=> s = s.replaceAll(i,idx));
    return +s;
}