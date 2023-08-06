function solution(my_string) {
    let regex = /[a-zA-Z]/;
    let str = my_string.split(regex).filter(v=>v).map(Number);
    let sum = str.reduce((acc,cur) => acc+=cur,0);
    return sum;
}