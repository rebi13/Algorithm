function solution(myString, pat) {
    let count = 0;
    for(let i=0; i<myString.length; i++) {
        if(myString.substr(i).indexOf(pat) === 0) count++;
    }
    return count;
}