function solution(n) {
    var answer = 0;
    for(let i=1; i<=n; i++){
        let count =0;
        for(let j=2; j<i; j++){
            if(i%j===0){
                answer++;
                break;
            }
        }
    }
    return answer;
}