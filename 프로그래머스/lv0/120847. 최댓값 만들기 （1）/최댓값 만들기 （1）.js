function solution(numbers) {
    let numArr = numbers.sort((a,b) => b-a);
    return numArr[0] * numArr[1];
}