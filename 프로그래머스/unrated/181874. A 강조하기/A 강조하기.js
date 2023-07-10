function solution(myString) {
    var answer = '';
    [...myString].forEach(function(el){
       if(el === 'a' || el === 'A'){
           answer += 'A'; 
       }else if(el.toUpperCase() === el){
           answer += el.toLowerCase();
       }else{
           answer += el;
       }
    });
    
    return answer;
}