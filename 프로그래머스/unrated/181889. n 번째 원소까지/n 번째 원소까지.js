function solution(num_list, n) {
    var answer = [];
    num_list.forEach(function(number, index){
         if(index >= n) return;
         answer.push(number);
    });
    return answer;
}