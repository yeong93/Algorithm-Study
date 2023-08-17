function solution(arr, queries) {
    var answer = [];
    queries.forEach((v)=>{
        let [s,e,k] = v;
        let test = arr.filter((val,idx)=> idx>=s && idx<=e && val>k).sort((a,b)=>a-b);
        answer.push(test[0]||-1);
    })
    return answer;
}