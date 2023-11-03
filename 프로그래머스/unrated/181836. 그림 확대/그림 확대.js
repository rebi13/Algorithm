function solution(picture, k) {
    const result = [];
    picture.forEach(x => {
       const arr = Array(k).fill([...x].map(y => y.repeat(k)).join('')); 
       result.push(arr);
    });
    return result.flat();
}