function solution(str_list) {
    var answer = [];
    let idx = str_list.findIndex(v => v === 'l' || v=== 'r');
    
    if(idx > -1 && str_list[idx] === 'l'){
        answer = str_list.slice(0,idx);
    }else if(idx > -1 && str_list[idx] === 'r'){
        answer = str_list.slice(idx+1);
    }
    return answer;
}