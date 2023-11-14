function solution(sizes) {
    const wArr = [], hArr = [];
    sizes.forEach(s => {
       const [w, h] = s;
        if(w > h) {
            wArr.push(w);
            hArr.push(h);
        }
        else {
            wArr.push(h);
            hArr.push(w);
        }
    });
    return Math.max(...wArr) * Math.max(...hArr);
}