function solution(emergency) {
    let sortArr = [...emergency].sort((a,b)=>b-a);
    let answer = [];
    sortArr.forEach(function(v,idx){
        answer[emergency.indexOf(v)] = idx+1;
    });
    return answer;
}