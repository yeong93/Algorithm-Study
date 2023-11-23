function solution(k, score) {
    var answer = [];
    score.map((v,i) => {
        let tmp = score.filter((val,idx) => idx<=i).sort((a,b) => b-a).slice(0,k);
        answer.push(tmp[tmp.length-1])
    })
    return answer;
}