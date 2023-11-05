function solution(numbers) {
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const notNumArr = numArr.filter(x => !numbers.includes(x));
    return notNumArr.reduce((a, c) => a + c, 0);
}