function solution(score) {
    let avg = score.map(v=> (v[0] + v[1]) / 2);
  	
    let sortArr = avg.slice().sort((a, b)=> b - a);
  	
    return avg.map(v => sortArr.indexOf(v) + 1);
}