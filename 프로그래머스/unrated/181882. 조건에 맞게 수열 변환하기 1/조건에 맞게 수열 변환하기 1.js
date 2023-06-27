function solution(arr) {
    var answer = [];
    arr.forEach((number) => {
        if(number >= 50 && number % 2 === 0){
            answer.push(number/2);
        }else if(number < 50 && number % 2 !== 0){
            answer.push(number*2);
        }else{
            answer.push(number);
        }
    });
    return answer;
}