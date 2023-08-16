function solution(arr, query) {
    var answer = [];
    query.forEach(function(v,i){
        i%2===0 ? arr.splice(v+1) : arr.splice(0,v);
    });
    return arr;
}