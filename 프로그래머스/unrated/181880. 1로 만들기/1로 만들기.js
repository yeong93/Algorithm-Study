function solution(num_list) {
    var count = 0;
    for(let i=0; i<num_list.length; i++){
        let result = num_list[i];
        while(result !== 1){
            if(result%2===0){
                result =result/2;
                count++;
            }else{
                result = (result-1)/2;
                count++;
            }
        };
    }
    return count;
}