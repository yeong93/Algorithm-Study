function solution(my_string, index_list) {
    var answer = '';
    index_list.forEach(function(num){
        answer += my_string.at(num);
    })
    return answer;
}