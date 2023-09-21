function solution(numlist, n) {
    var answer = [];
    let arr = numlist.sort((a,b) => a-b).map(v => Math.abs(v-n));
    
    for(let i=0; i<arr.length; i++){
        let idx = arr.lastIndexOf(Math.min(...arr))
        answer.push(numlist[idx]);
        arr[idx] = Infinity;
    }
    return answer;
}