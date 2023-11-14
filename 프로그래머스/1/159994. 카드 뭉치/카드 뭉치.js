function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    let i = 0, j = 0;
    
    goal.map(v => {
        if(v === cards1[i]){
            i++;
        }else if(v === cards2[j]){
            j++;
        }else{
            answer = 'No';
        }
    })
    return answer;
}