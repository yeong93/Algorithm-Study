function solution(my_str, n) {
    var answer = [];
    let arr = my_str.split('');
    for(let i=0; i<my_str.length/n; i++){
        answer.push(arr.splice(0,n).join(''));
    }
    return answer;
}