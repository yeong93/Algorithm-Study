function solution(arr) {
    var answer = 0;
    let tmp = [];
    while(true){
        tmp = arr.map(v => v>=50&&v%2===0 ? v/2 : v<50&&v%2!==0 ? v*2+1 : v);
        if(JSON.stringify(arr) === JSON.stringify(tmp)){
            break;
        }else{
            answer++;
            arr = tmp;
        }
    }
    return answer;
}

