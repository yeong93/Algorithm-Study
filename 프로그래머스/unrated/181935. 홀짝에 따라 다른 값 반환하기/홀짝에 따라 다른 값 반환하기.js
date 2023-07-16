function solution(n) {
    var answer = [];
    if(n % 2 == 0){
        for(let i=2; i<=n; i+=2) answer.push(Math.pow(i,2));
    }else{
        for(let i=1; i<=n; i+=2) answer.push(i);
    }
    return answer.reduce((a,b) => a+b);
}