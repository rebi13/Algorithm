function solution(n) {
    const repeatNum = ~~(n / 2);
    return `${"수박".repeat(repeatNum)}${n % 2 ? "수" : ""}`;
}