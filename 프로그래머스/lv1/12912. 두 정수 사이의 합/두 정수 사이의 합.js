const solution = (a, b) => Array(Math.abs(a-b)+1).fill(Math.min(a,b)).map((v,i) => v+i).reduce((acc,cur) => acc+=cur,0);