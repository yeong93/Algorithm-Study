function solution(arr) {
    let len = 1;
    while(arr.length > len) len = len*2;
    return [...arr, ...new Array(len-arr.length).fill(0)];
}