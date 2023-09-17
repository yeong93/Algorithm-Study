function solution(score) {
    let avgArr = score.map(v=> (v[0]+v[1])/2);
    let sortArr = [...avgArr].sort((a,b) => b-a);
    
    return avgArr.map(v => sortArr.indexOf(v)+1);
}