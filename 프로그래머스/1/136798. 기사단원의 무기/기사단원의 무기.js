function solution(number, limit, power) {
    const arr = new Array(number).fill(0).map((_,i)=>i+1);
    
    return arr.map(v => {
        let cnt = 0;
        for(let i=1; i<Math.sqrt(v); i++) if(v%i===0) cnt++
        cnt = (cnt * 2 + Number.isInteger(Math.sqrt(v)))
        return cnt>limit ? power : cnt;
    }).reduce((acc,cur) => acc +=cur,0);
}