function solution(n) {
    let answer = [];

    let num = 2;
    while(num<=n){
        if(n%num===0){
            if(answer.indexOf(num) === -1) answer.push(num);
            n = n/num;
        }else{
            num++;
        }
    }
    
    return answer.length>0 ? answer.sort((a,b) => a-b) : [n];
}