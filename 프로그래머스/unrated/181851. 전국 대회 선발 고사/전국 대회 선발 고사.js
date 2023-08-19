function solution(rank, attendance) {
    let sortArr = rank.filter((v,i)=> attendance[i]).sort((a,b)=>a-b).slice(0,3);
    let answer = [];
    for(i of sortArr){
        answer.push(rank.indexOf(i));
    }
    return answer[0]*10000 + answer[1]*100 + answer[2];
}