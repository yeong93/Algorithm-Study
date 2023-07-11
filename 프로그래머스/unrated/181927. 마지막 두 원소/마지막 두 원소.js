function solution(num_list) {
    var answer = [];
    if(num_list.at(-1) > num_list.at(-2)){
        num_list.push(Number(num_list.at(-1)) - Number(num_list.at(-2)));
    }else{
        num_list.push(Number(num_list.at(-1))*2);
    }
    return num_list;
}