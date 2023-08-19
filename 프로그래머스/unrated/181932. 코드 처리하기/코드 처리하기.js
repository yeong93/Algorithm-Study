function solution(code) {
    let answer = '';
    let mode = false;
    [...code].forEach(function(num,idx){
        if(num === '1'){
            mode = !mode;  
        }else{ 
            if(mode&&idx%2!==0 || !mode&&idx%2===0) answer+= num;
        }
    });
    return answer||'EMPTY';
}