function solution(chicken) {
    var answer = 0;
    while(chicken >= 10){
        let remain = chicken%10;
        chicken = Math.floor(chicken/10);
        answer += chicken;
        chicken += remain;
    }
    
    return answer;
}