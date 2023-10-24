function solution(l, r) {
    let answer = Array(r-l+1).fill(l).map((x, i) => (x + i)).filter(x => x.toString() !== x.toString().replace(/^(5|0)+$/g, ""));
    return answer.length ? answer : [-1];
}