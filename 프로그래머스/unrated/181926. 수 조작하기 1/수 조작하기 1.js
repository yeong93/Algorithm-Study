function solution(n, control) {
    let arr = control.split('');
    arr.forEach(function(item){
        if(item === "w") ++n;
        if(item === "s") --n;
        if(item === "d") n+=10; 
        if(item === "a") n-=10; 
    })
    return n;
}