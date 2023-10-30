function solution(str_list) {
    const index = str_list.findIndex(item => item === 'l' || item === 'r');
    let result = [];
    
    if(!(index > -1)) result = [];
    else if(str_list[index] === 'l') result = str_list.slice(0, index);    
    else result = str_list.slice(index + 1);
    
    return result;
}
