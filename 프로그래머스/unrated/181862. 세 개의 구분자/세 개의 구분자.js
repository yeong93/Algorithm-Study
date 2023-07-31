function solution(myStr) {
    var answer = [];
    answer = myStr.split(/[a|b|c]/g).filter(v => v !== '');
    if(answer.length === 0) answer.push('EMPTY');
    return answer;
}