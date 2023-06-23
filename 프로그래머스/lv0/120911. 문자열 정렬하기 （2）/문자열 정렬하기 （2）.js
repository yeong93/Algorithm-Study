function solution(my_string) {
    var answer = '';
    var arr = my_string.toLowerCase().split('').sort();
    for(let i in arr){
       answer += arr[i]; 
    }
    return answer;
}