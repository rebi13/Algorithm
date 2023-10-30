function solution(spell, dic) {
    spell.forEach(x => {
        dic = dic.filter(y => y.includes(x));
    })
    return dic.length ? 1 : 2;
}