function solution(a, b, c, d) {
    var answer = 0;
    let arr = [a,b,c,d];
    let set = new Set(arr);
    
    if(set.size === 1){
        answer = 1111*a;
    }else if(set.size === 2){
        const [p,q] = set;
        if(arr.filter(v=> v===p).length>2){
            answer = Math.pow(10*p+q,2);
        }else if(arr.filter(v=> v===q).length>2){
            answer = Math.pow(10*q+p,2);
        }else{
            answer = (p+q)*Math.abs(p-q);
        }
    }else if(set.size === 3){
        const [p,q,r] = set;
        answer = arr.filter(v => v===p).length>1 ? q*r : arr.filter(v => v===q).length>1 ? p*r : p*q;
    }else{
        answer = Math.min(...arr);
    }
    
    return answer;
}