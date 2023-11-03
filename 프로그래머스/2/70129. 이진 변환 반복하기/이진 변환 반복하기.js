function solution(s) {
    let cnt = 0, num = 0;
    let binary = [...s];
    
    while(binary.length!==1){
        let len = binary.filter(v=> +v===1).length;
        num += binary.length-len;
        binary = len.toString(2).split('');
        cnt++;
    }
    return [cnt,num];
}