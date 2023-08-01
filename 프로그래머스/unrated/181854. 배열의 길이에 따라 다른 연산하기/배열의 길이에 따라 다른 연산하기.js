const solution = (arr, n) => 
arr.map((v,idx) => arr.length%2===0 && idx%2!==0 ? v+n : arr.length%2!==0 && idx%2===0 ? v+n : v);