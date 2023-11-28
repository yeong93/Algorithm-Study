function solution(array) {
    let obj = {};
    array.map(v => obj[v] === undefined ? obj[v] = 1 : obj[v]++)
    const cnt = Object.values(obj);
    const max = Math.max(...cnt);
    if(cnt.filter((v,i) => v === max).length>1 || (array.length !== 1 && max===1)) return -1;
    return Number(Object.keys(obj).find(key => obj[key] === max));
}