const solution = arr => {
    let idx = Math.min(...arr);
    arr.splice(arr.indexOf(idx),1);
    return arr.length>0 ? arr : [-1];
}      