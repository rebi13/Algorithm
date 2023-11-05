function solution(s) {
    let mid = ~~(s.length / 2);
    return s.length % 2 ? s.substring(mid, mid+1) : s.substring(mid-1, mid+1);
}