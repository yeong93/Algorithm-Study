function solution(arr, k) {
    let answer = new Array(k).fill(-1);
    let idx = 0;
    for(let v of arr){
        if(answer.indexOf(v) === -1 && idx<k){
            answer[idx] = v;
            idx++;
        }
    }
    return answer;
}