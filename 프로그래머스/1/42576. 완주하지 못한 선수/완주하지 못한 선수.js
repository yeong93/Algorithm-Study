function solution(participant, completion) {
    participant.sort();
    completion.sort();
    completion[completion.length] = '';
    
    for(let i in participant){
        if(participant[i] !== completion[i]){
             answer = participant[i];
             return participant[i];
        }
    }
    
}