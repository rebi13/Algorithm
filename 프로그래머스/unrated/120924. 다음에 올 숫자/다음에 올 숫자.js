function solution(common) {
    let d = common[2] - common[1] === common[1] - common[0] ? common[2] - common[1] : 0;
    let r = common[2] / common[1] === common[1] / common[0] ? ~~(common[2] / common[1]) : 0;
    return d !== 0 ? common[common.length - 1] + d : common[common.length - 1] * r;
}