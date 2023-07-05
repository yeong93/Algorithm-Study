function solution(num_list) {
    var answer = 0;
    let even = [];
    let odd = [];
    num_list.filter(item => item % 2 === 0 ? even.push(item) : odd.push(item));
    answer = Number(even.join('')) + Number(odd.join(''));
    return answer;
}