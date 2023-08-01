function solution(my_string) {
    var answer = '';
    let arr = [];
    [...my_string].forEach(function(v){
        if(!arr.includes(v)) arr.push(v);
    });
    return arr.join('');
}