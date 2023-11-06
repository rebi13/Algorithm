function solution(price, money, count) {
    const priceArr = Array(count).fill(price).map((x, i) => x * (i + 1));
    const allPrice = priceArr.reduce((a, c) => a + c, 0);
    
    return allPrice > money ? allPrice - money : 0;
}