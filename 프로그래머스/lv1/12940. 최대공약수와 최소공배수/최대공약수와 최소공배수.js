function solution(n, m) {
    let min = 1;
    for(let i=2; i<=Math.min(n,m); i++){
        if(Math.max(n,m)%i===0 && Math.min(n,m)%i===0){
            min =i;
        }
    }
    return [min, n*m/min]
}


