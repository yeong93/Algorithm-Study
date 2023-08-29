function solution(my_string) {
    let answer = new Array(52).fill(0);
    [...my_string].forEach(function(v,i){
        let char = my_string.charCodeAt(i);
        char <= 90 ? answer[char-65]++ : answer[char-71]++
    });
    
    return answer;
}