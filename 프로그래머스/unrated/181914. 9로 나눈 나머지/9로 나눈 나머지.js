function solution(number) {
    var answer = 0;
    let arr = number.split('');
    arr.forEach(function(number){
        answer += Number(number);
    });
    return Math.round(answer%9);
}