const solution = (left, right) => {
    let arr = Array(right-left+1).fill(left).map((v,i) => left+i);
    let sum = 0 ;
    
    arr.forEach(function(v){
        let cnt = 0;
        for(let i=0; i<=v; i++){
            if(v%i === 0 ) cnt++;
        }
        cnt%2===0 ? sum+=v : sum-=v;
        
    })
    return sum;
}