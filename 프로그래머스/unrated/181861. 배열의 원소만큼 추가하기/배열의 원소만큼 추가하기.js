function solution(arr) {
    let result = [];
    for(let i=0; i<arr.length; ++i) {
        for(let j=0; j<arr[i]; ++j) {
            result.push(arr[i]);
        }
    }
    return result;
//     let result = [];
//     arr.forEach(el => {
//         result.push(el.toString().repeat(el).split(''));
//     });
    
//     return result.flat().map(v => +v);
}