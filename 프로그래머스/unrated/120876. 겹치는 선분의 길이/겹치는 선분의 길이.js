function solution(lines) {
    var answer = 0;
    let obj = {};
    
    lines.map(v => {
        let [start,end] = v;
        for(let i=start; i<end; i++){
            obj[i] === undefined ? obj[i]=1 : obj[i]++;
        }
    })
    
    for(let i in obj){
        if(obj[i] > 1) answer++;
    }
    return answer;
}