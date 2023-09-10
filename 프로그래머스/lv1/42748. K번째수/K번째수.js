function solution(array, commands) {
    var answer = [];
    commands.map(idx=>{
        let arr = array.filter((_,i) => i>=idx[0]-1 && i<=idx[1]-1).sort((a,b)=> a-b);
        answer.push(arr[idx[2]-1]);
    });
    return answer;
}