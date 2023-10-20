function solution(polynomial) {
    let num = 0;
    let x = 0;
    let arr = polynomial.split(' ').filter(v => !v.includes('+'));
    arr.forEach(function(v){
        if(!v.includes('x')){
            num += +v;
        }else{
             x += v.substr(0,v.length-1) === '' ? 1 : +(v.substr(0,v.length-1));
        }
    })
    
    if(x!==0 && num!==0) return x===1 ? `x + ${num}` : `${x}x + ${num}`;
    if(x!==0 && num===0) return x===1 ? `x` : `${x}x`;
    if(x===0 && num!==0) return `${num}`;
}