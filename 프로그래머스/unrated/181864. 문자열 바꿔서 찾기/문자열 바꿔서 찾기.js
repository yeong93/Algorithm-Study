function solution(myString, pat) {
    let answer = "";
    [...myString].forEach(function(str){
        if(str === "A"){
            answer += "B";
        }else{
            answer += "A";
        }
    });
    return answer.includes(pat) ? 1 : 0;
}