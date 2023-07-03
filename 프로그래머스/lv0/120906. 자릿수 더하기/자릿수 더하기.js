function solution(n) {
    let answer = 0;
    let arr = n.toString().split('');
    arr.forEach(function(item){
      answer += Number(item);
    });
    return answer;
}