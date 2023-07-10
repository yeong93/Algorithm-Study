function solution(myString) {
    let arr = myString.split('');
    var answer = '';
    arr.forEach(function(el){
       if(el === 'a'){
           answer += 'A'; 
       }else if(el !== 'A' && el.toUpperCase() === el){
           answer += el.toLowerCase();
       }else{
           answer += el;
       }
    });
    
    return answer;
}