function solution(a, b, c) {
    const ab = a === b;
    const bc = b === c;
    const ca = c === a;
    let result = 0;
    if(!(ab || bc || ca)) result = a + b + c;
    else if(!((ab && bc) || (bc && ca) || (ca && ab))) result = (a+b+c)*(a*a+b*b+c*c);
    else if(ab && bc && ca) result = (a+b+c)*(a*a+b*b+c*c)*(a*a*a+b*b*b+c*c*c);
    return result;
}