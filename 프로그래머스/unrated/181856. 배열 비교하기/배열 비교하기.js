function solution(arr1, arr2) {
    let sum1 = arr1.reduce((a, b) => a + b, 0);
    let sum2 = arr2.reduce((a, b) => a + b, 0);
    let answer = 0;
    if(arr1.length === arr2.length){
        if(sum1 > sum2){
            answer = 1;
        }else if(sum1 < sum2){
            answer = -1;
        }else{
            answer = 0;
        }
    }else{
        answer = arr1.length > arr2.length ? 1 : -1;    
    }
    return answer;
}