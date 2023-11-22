function solution(brown, yellow) {
    var answer = [];
    for(let i=1; i<=Math.sqrt(yellow); i++){
        if(yellow%i === 0){
            let share = yellow/i;
            if(brown ===(share*2)+(i*2)+4){
                answer.push(share+2,i+2);
            }
        }
    }
    return answer;
}