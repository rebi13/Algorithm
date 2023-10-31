function solution(babbling) {
    const bab = ["aya", "ye", "woo", "ma"];
    
    const result = babbling.map(babb => {
        if(babb.includes("aya")) babb = babb.replace("aya", " ");
        if(babb.includes("ye")) babb = babb.replace("ye", " ");
        if(babb.includes("woo")) babb = babb.replace("woo", " ");
        if(babb.includes("ma")) babb = babb.replace("ma", " ");
        return babb;
    }).map(x => x.trim()).filter(x => x);
    
    return babbling.length - result.length;
}