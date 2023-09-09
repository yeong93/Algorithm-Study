function solution(s) {
    let num = ['zero','one','two','three','four','five','six','seven','eight','nine']
    for(let i=0; i<num.length; i++){
        let arr = s.split(num[i]);
        s = arr.join(i);
    }
    return +s;
}