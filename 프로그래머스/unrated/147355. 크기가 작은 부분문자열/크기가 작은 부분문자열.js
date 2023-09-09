function solution(t, p) {
    let arr = [];
    let len1 = t.length, len2 = p.length;
    
    for(let i=0; i<=len1-len2; i++){
        arr.push(t.substr(i,len2))
    }
    return arr.filter(v=> v<=p).length;
}