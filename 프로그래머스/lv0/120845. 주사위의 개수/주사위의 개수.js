function solution(box, n) {
    const [w, v, h] = box;
    return ~~(w/n) * ~~(v/n) * ~~(h/n);
}