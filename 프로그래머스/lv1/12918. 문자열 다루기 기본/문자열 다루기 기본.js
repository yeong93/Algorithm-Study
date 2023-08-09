function solution(s) {
    var answer = false;
    if(s.length === 4 || s.length === 6){
        if([...s].filter(v=> isNaN(v)).length === 0) answer = true;
    }
    return answer;
}