function solution(arr) {
    var answer = [];
    arr.forEach(function(v,i){
        if(answer.length === 0){
            answer.push(v);
        }else{
            if(answer[answer.length-1] === v){
                answer.pop();
            }else{
                answer.push(v);
            }
        }
    });
    return answer.length ? answer : [-1];
}