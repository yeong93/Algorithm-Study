function solution(num_list) {
    let even = 0;
    let odd = 0;
    num_list.forEach(function(num,idx){
        idx%2==0 ?  even+=num : odd+=num
    })
    return even>=odd ? even : odd;
}