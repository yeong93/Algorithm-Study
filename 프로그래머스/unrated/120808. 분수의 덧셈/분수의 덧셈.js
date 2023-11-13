function solution(numer1, denom1, numer2, denom2) {
    let divisor = 1;
    let numer = 1;
    
    for(let i=2; i<=Math.min(denom1,denom2); i++){
        if(denom1%i===0 && denom2%i===0){
            divisor = i * (denom1/i) * (denom2/i)
        }
    }
    
    if(divisor!==1){
        numer1 *= divisor/denom1;
        numer2 *= divisor/denom2;
    }else{
        numer1 *= denom2;
        numer2 *= denom1;
        divisor = denom1 * denom2;
    }
    numer =  numer1+numer2;
    
    for(let i=numer; i>=1; i--){
        if(numer%i===0 && divisor%i===0){
            numer = numer/i;
            divisor = divisor/i;
        }
    }
    
    return [numer, divisor];
}