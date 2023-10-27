function solution(s){
    let answer = [];
    [...s].forEach(function(v){
        if(v === ')' && answer[answer.length-1] === '('){
            answer.pop();
        }else{
            answer.push(v);
        }
    });

    return answer.length>0 ? false : true
}