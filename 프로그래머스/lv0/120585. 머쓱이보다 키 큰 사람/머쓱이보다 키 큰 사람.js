function solution(array, height) {
    var answer = 0;
    answer = array.filter(number => number > height);
    return answer.length;
}