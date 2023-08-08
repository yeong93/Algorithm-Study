function solution(a, b, c) {
    let sum1 = a+b+c;
    let sum2 = Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2);
    let sum3 = Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3);
    let total = 0;
    if(a !== b && b !== c  && a !== c){
        total = sum1;
    }else if(a === b && b === c){
        total = sum1*sum2*sum3;
    }else{
        total = sum1*sum2;
    }
    return total;
}