function solution(myString) {
    let answer = "";
    let arr = myString.split('');
    arr.forEach(function(v){
        v.charAt() < "l".charAt() ? answer+= "l" : answer += v;
    });
    
    return answer;
}