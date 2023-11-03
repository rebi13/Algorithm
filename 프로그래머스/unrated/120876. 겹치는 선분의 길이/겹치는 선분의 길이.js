function solution(lines) {
    const [[xl1, yl1], [xl2, yl2], [xl3, yl3]] = lines;
     
    const [max12x, min12y] = [Math.max(xl1, xl2), Math.min(yl1, yl2)];
    const [max13x, min13y] = [Math.max(xl1, xl3), Math.min(yl1, yl3)];
    const [max23x, min23y] = [Math.max(xl2, xl3), Math.min(yl2, yl3)];
    
    const [max123x, min123y] = [Math.max(xl1, xl2, xl3), Math.min(yl1, yl2, yl3)];
    
    let l1l2 = max12x > min12y ? [] : [max12x, min12y];
    let l2l3 = max23x > min23y ? [] : [max23x, min23y];
    let l1l3 = max13x > min13y ? [] : [max13x, min13y];
    let l1l2l3 = max123x > min123y ? [] : [max123x, min123y];
    
    console.log(l1l2, l2l3, l1l3);
    const sum1 = l1l2.length ? l1l2[1] - l1l2[0] : 0;
    const sum2 = l2l3.length ? l2l3[1] - l2l3[0] : 0;
    const sum3 = l1l3.length ? l1l3[1] - l1l3[0] : 0;
    const sum4 = l1l2l3.length ? l1l2l3[1] - l1l2l3[0] : 0;
    console.log(sum1, sum2, sum3, sum4);
    return (sum1 + sum2 + sum3) - sum4 * 2;
    //       3 4 5 6 7 8 9
    // 0 1 2 3 4 5
    //   1 2 3 4 5 6 7 8 9 10
//     // 1 l1, l2
//     const [x1, x2, y1, y2] = [l1[0], l2[0], l1[1], l2[1]];
//     let l1l2 = Math.max(x1,x2) > Math.min(y1,y2) ? [] : [Math.max(x1, x2), Math.min(y1, y2)];
    
//     console.log(l1l2);
//     // 2 l2, l3
//     const [v1, v2, w1, w2] = [l2[0], l3[0], l2[1], l3[1]];
//     let l2l3 = Math.max(v1,v2) > Math.min(w1,w2) ? [] : [Math.max(v1, v2), Math.min(w1, w2)];
    
//     console.log(l2l3);
//     // 3 위 두개 비교
//     if(l1l2[0] === l1l2[1]) l1l2 = [];
//     if(l2l3[0] === l2l3[1]) l2l3 = [];
    
//     console.log(l1l2.length);
    // const sum1 = l1l2.length ? l1l2[1] - l1l2[0] : 0;
    // const sum2 = l2l3.length ? l2l3[1] - l2l3[0] : 0;
    
    // return sum1 + sum2;
    // 3 4 5, 3 4 5 6 7 8 9
}