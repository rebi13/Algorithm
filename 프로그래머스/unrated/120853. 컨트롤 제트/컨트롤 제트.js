function solution(s) {
    const arr = s.split(' ');
    let sum = 0;
    
    for(let i=0; i<arr.length; ++i) {
        if(arr[i] === 'Z') sum -= +arr[i-1];
        else sum += +arr[i];
    }
    
    return sum;
}