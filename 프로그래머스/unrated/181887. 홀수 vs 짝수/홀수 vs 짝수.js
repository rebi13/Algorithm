function solution(num_list) {
    const odd = num_list.filter((_,i) => i % 2).reduce((a,c) => a + c);
    const even = num_list.filter((_,i) => i % 2 === 0).reduce((a,c) => a + c);
    
    return odd > even ? odd : even;
}