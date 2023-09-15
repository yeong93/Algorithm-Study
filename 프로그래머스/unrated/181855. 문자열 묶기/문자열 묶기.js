function solution(strArr) {
    
    let max = Math.max(...strArr.map(v => v.length));
    var answer = 0;
    
    for(let i=1; i<=max; i++){
        if(answer <= strArr.filter(v => v.length === i).length){
            answer = strArr.filter(v => v.length === i).length
        }
    }
    return answer;
}