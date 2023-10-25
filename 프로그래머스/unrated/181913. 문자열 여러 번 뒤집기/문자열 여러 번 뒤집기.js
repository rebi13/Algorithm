function solution(my_string, queries) {
    let myStr = [...my_string];
    
    queries.forEach( ([a,b]) => {
        const leftArr = myStr.slice(0, a);
        const arr = myStr.slice(a, b + 1).reverse();
        const rightArr = myStr.slice(b + 1);
        myStr = [...leftArr, ...arr, ...rightArr];
    })
 
    return myStr.join('');
}