function solution(arr, k) {
    var answer = [];
    answer = (k % 2 == 0) ? arr.map(element => element + k) : arr.map(element => element * k);
    return answer;
}