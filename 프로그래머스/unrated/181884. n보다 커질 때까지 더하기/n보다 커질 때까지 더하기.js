function solution(numbers, n) {
    var answer = 0;
    numbers.forEach(function(item){
        if(answer <= n) answer += item;
    });
    return answer;
}