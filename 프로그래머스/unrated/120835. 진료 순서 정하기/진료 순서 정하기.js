function solution(emergency) {
    const seq = Array(emergency.length).fill(0);
    [...emergency].sort((a,b) => b - a).forEach((s, i) => {
        seq[emergency.indexOf(s)] = i + 1;
    });

    return seq;
}