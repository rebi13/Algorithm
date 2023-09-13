function solution(myString, pat) {
    return +myString.replaceAll("A","X").replaceAll("B","A").replaceAll("X", "B").includes(pat);
}