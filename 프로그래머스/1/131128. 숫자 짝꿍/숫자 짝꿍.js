function solution(X, Y) {
    let answer = [];
    const arrX = new Array(10).fill(0);
    const arrY = new Array(10).fill(0);
    
    X.split('').map(v => arrX[v]++);
    Y.split('').map(v => arrY[v]++);
    for(let i=0; i<10; i++){
        const min = Math.min(arrX[i], arrY[i])
        for(let j=0; j<min; j++){
            answer.push(i);
        }
    }
    answer.sort((a,b) => b-a);
    
    if(answer.length === 0){
        return '-1'
    }else if(answer[0] === 0){
        return '0'
    }
    return answer.join('')
}