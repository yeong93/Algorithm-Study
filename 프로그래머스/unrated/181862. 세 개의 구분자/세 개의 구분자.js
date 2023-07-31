function solution(myStr) {
    var answer = [];
    answer = myStr.split(/[a|b|c]/g).filter(str => str);
    return answer.length ? answer : ["EMPTY"];
}