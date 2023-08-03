function solution(s) {
    var answer = 0;
    let arr = s.split(' ');
    arr.forEach(function(str,idx){
        if(str === "Z"){
            answer -= arr[idx-1]
        }else{
            answer+= (+str);
        }
    });
    return answer;
}