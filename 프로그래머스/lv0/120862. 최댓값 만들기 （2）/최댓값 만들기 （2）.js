function solution(numbers) {
    const [num1, num2] = numbers.sort((a, b) => b-a);
    const [num3, num4] = numbers.sort((a, b) => a-b);
    return num1 * num2 > num3 * num4 ? num1 * num2 : num3 * num4;
}