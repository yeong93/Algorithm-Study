function solution(s){
    const pLength = [...s].filter(v=> v.toUpperCase() == 'P').length;
    const lLength = [...s].filter(v=> v.toUpperCase() == 'Y').length;
    return pLength !== lLength ? false : true;
    
}