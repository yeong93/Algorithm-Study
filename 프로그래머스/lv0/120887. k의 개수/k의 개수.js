function solution(i, j, k) {
    var answer = 0;
    for(let num=i; num<=j; num++){
        let arr = num.toString().split('');
        arr.forEach(function(v){
            if(v.includes(k)) answer++;
        });
    }
    return answer;
}