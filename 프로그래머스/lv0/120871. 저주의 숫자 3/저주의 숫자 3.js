function solution(n) {
    let answer = 0, count = 0;
    while(n>count){
        count++
        answer++
        while(answer.toString().split('').some(v => +v===3) || answer%3===0) answer++
    }
    
    return answer;
}