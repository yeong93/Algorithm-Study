function solution(arr, flag) {
    var answer = [];
    flag.forEach(function(v,idx){
       if(v){
           for(let i=0; i<arr[idx]; i++){
               answer.push(arr[idx]);
               answer.push(arr[idx]);   
           }
       }else{
           for(let i=0; i<arr[idx]; i++){
               answer.pop();
           }
           
       }
    });
    return answer;
}