function solution(order) {
    const menu = {
        "americano" : 4500,
        "latte": 5000
    };
    
    const price = order.reduce((a, c) => a + (c.indexOf('latte') > -1 ? 5000 : 4500), 0);
    return price;
}