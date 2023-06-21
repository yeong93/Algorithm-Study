function solution(my_string) {
    var answer = 0;
    for(let i in my_string){
        if(!isNaN(my_string[i])) answer+= Number(my_string[i]);
    }
    return answer;
}