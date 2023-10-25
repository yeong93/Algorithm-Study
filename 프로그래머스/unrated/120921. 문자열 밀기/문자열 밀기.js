function solution(A, B) {
    if(A === B) return 0
    
    let answer = 0;
    for(let i=1; i<A.length; i++){
        let str = A.slice(-i);
        let tmp = A.slice(0,A.length-i);
        if(str.concat(tmp) === B){
            answer = i;
            return answer;
        }
    }
    return -1
}