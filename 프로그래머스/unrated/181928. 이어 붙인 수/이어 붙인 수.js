function solution(num_list) {
    let even = [];
    let odd = [];
    num_list.filter(item => item % 2 === 0 ? even.push(item) : odd.push(item));
    return Number(even.join('')) + Number(odd.join(''));
}