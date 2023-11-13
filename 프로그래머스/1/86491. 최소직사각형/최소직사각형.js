function solution(sizes) {
    let width = [], height = [];
    for(let i in sizes){
        for(let j in i){
            if(sizes[i][0] > sizes[i][1]){
                width.push(sizes[i][0]);
                height.push(sizes[i][1])   
            }else{
                width.push(sizes[i][1]);
                height.push(sizes[i][0])   
            }
        }
    }
    return Math.max(...width)*Math.max(...height);
}