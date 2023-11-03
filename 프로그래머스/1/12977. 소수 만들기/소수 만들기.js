function solution(nums) {
    var answer = 0;
    let arr = [];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                arr.push(nums[i] + nums[j] + nums[k])
            }
        }
    }
    
    arr.forEach(function(v){
        let tmp = [];
        for(let i=2; i<v; i++) if(v%i ===0) tmp.push(i);
        answer += tmp.length===0 ? 1 : 0
    })
    return answer;
}
