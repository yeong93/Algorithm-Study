function solution(numbers) {
    let str = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    str.forEach(function(v, i){
        numbers = numbers.replaceAll(v,i);
    });
    return Number(numbers);
}