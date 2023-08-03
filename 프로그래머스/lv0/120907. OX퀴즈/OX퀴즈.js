function solution(quiz) {
    var answer = [];
    quiz.forEach(function(str,idx){
        let arr = str.split(' ');
        if(arr[1] === "+"){
            answer.push(+arr[0] + +arr[2] === +arr[4] ? "O" : "X");
        }else{
            answer.push(+arr[0] - +arr[2] === +arr[4] ? "O" : "X");
        }
    });
    return answer;
}