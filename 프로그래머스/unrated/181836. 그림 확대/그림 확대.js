function solution(picture, k) {
    var answer = [];
    picture.map(val=>{
        let str = '';
        val.split('').map(v=>{
            str += v === '.' ? '.'.repeat(k) : 'x'.repeat(k)
        })
        for(let i=0; i<k; i++){
            answer.push(str);
        }
    });
    return answer;
}