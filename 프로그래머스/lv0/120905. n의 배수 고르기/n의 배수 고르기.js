function solution(n, numlist) {
    var answer = [];
    for(let i in numlist){
        if(numlist[i] % n === 0){
            answer.push(numlist[i]);
        }
    }
    return answer;
}