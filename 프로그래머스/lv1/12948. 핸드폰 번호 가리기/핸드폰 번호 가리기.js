function solution(phone_number) {
    const a = phone_number.substr(-4);
    const star = '*'.repeat(phone_number.length - a.length);
    return star + a;
}