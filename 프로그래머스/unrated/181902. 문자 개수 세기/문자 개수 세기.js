function solution(my_string) {
    const obj = {};
    const arr1 = Array(26).fill('').map((_, i) => String.fromCharCode(65+i));
    const arr2 = Array(26).fill('').map((_, i) => String.fromCharCode(97+i));
    const arr = [...arr1, ...arr2];
    
    arr.forEach(alpha => {
        obj[alpha] = 0;
    });
    
    [...my_string].forEach(alp => {
        obj[alp]++;
    });
    
    return Object.values(obj);
}