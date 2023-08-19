function solution(l, r) {
    var answer = [];
    for(let i=l; i<=r; i++){
        if(i.toString().split('').every(x => x==='5' || x==='0')){
            answer.push(i);
        }
    }
    return answer.length>0 ? answer : [-1];
}