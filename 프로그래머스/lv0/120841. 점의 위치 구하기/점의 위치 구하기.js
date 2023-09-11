function solution(dot) {
    const [x, y] = dot;
    switch(x * y > 0) {
        case true :
            return x > 0 ? 1 : 3
        case false :
            return y > 0 ? 2 : 4
    }
}
