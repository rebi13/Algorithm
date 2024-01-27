function solution(food) {
    let result = '';
    
    food.forEach((f, i) => {
        result += (i + '').repeat(~~(f/2));
    });
    
    return result + '0' + [...result].reverse().join('');
}