function solution(s) {
    let answer = [];
    [...s].forEach(function(v){
        if(s.indexOf(v) === s.lastIndexOf(v)){
            answer.push(v);
        }
    })
    
    return answer.sort().join('');
}