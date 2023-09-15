function solution(sides) {
    let set = new Set();
    let max = Math.max(...sides);
    let min = Math.min(...sides);
    
    // 기존 번호가 max
    for(let i=1; i<=max; i++) if(min+i > max) set.add(i);
    // 새로운 번호가 max
    for(let i=max+1; i<sides[0]+sides[1]; i++) set.add(i);

    return set.size;
}