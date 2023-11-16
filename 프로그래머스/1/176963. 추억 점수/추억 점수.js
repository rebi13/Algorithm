function solution(name, yearning, photo) {
    const result = Array(photo.length).fill(0);

    const resultObject = name.reduce((obj, key, index) => {
        obj[key] = yearning[index];
        return obj;
    }, {});

    photo.forEach((arr, i) => {
        arr.forEach(p => {
            if(resultObject[p]) result[i] += resultObject[p];
        })
    })
    return result;
}