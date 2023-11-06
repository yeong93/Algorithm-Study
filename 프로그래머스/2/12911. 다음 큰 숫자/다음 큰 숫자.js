function solution(n) {
    var answer = n;
    let nLen = n.toString(2).split('').filter(v => +v===1).length;
    
    while(true){
        answer++;
        if(answer.toString(2).split('').filter(v => +v===1).length === nLen){
            break;
        }
    }
    return answer;
}