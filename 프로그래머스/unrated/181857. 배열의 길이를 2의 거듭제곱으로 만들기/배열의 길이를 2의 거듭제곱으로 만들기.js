function solution(arr) {
    let len = 1;
    while(arr.length > len) len = len*2;
    
    let newArr = new Array(len).fill(0);
    for(let i=0; i<arr.length; i++){
        newArr[i] = arr[i]
    }

    return newArr;
}