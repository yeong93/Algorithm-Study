function solution(s) {
    let tmp = [];
    let answer = [...s].map((v, i) => {
        if(tmp.indexOf(v) > -1){
            tmp.push(v);
            return i-s.substr(0,i).lastIndexOf(v);
        }else{
            tmp.push(v);
            return -1;
        }
    });
    return answer;
}