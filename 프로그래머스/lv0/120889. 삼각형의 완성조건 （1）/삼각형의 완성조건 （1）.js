function solution(sides) {
    const [s1, s2, s3] = sides.sort((a,b) => a - b);
    return -(+(s1+s2 > s3)) + 2;
}