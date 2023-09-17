function solution(num_list, n) {
    const sliced = num_list.slice(0, n);
    const remain = num_list.slice(n);
    return [...remain, ...sliced];
}