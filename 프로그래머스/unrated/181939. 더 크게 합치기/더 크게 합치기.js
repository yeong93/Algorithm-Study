function solution(a, b) {
    if(a.toString() + b.toString() > b.toString() +     a.toString()){
        return Number(a.toString() + b.toString());
    }else{
        return Number(b.toString() + a.toString());
    }
}