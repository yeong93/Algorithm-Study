function solution(ingredient) {
    let answer = 0
    let stack = []
    
    ingredient.forEach((v)=>{
        stack.push(v);
        const sLength = stack.length;
        if(stack[sLength-4] === 1 && stack[sLength-3] === 2 
           && stack[sLength-2] === 3 && stack[sLength-1] === 1){
            for(let i=0;i<4;i++){
                stack.pop();
            }
            answer++
         } 
    })
    return answer
}

/*
indexOf 사용으로 인한 시간초과 => stack으로 변경
function solution(ingredient) {
    let answer = 0;
    let str = ingredient.join('');
    
    while(str.indexOf('1231') > -1){
        answer++;
        let idx = str.indexOf('1231');
        str = str.substr(0,idx) + str.substr(idx+4);
    }
    return answer;
}
*/