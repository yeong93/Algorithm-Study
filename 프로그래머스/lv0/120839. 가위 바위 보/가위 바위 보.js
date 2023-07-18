function solution(rsp) {
    let answer = [];
    answer = Array.from(rsp).map(v => {
        switch(Number(v)){
            case 2 : 
                return 0
            case 0 : 
                return 5
            default :
                return 2
        }
    });
    return answer.join('');
}