function solution(numbers) {
    const strNumber = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    strNumber.forEach((nums, index) => {
        numbers = numbers.split(nums).join(index)
    }); 

    return Number(numbers);
}