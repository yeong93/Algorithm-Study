function solution(citations) {
    let answer = 0;
    let arr = [];
    citations = citations.sort((a,b) => b-a);

    for(let i=0; i<citations.length; i++){
        arr.push(citations[i]);
        if(citations[i] < arr.length){
            break;
        }else{
            answer++;    
        }
    }
    
    return answer;
}