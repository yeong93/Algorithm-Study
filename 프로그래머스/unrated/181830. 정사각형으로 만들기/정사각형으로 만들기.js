function solution(arr) {
    let len1 = arr.length;
    let len2 = arr[0].length;
    let min = Math.abs(arr.length-arr[0].length);
    
    if(len1 > len2){
        for(let i=0; i<arr.length; i++){
            for(let j=0; j<min; j++){
                arr[i].push(0);   
            }
        }
    }else if(len1 < len2){
        for(let i=0; i<min; i++){
            let row= [];
            for(let j=0; j<len2; j++){
                row.push(0);
            }
            arr.push(row);
        }
    }
    return arr;
}