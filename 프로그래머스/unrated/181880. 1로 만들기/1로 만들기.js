function solution(num_list) {
    let count = 0;
    num_list.forEach(num => {
        while(num > 1) {
            if(num % 2) num -= 1;
            num /= 2;
            count++;
        }
    })
    return count;
}