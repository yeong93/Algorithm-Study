const solution = n => 
Array(n).fill(1).map((v,i) => (i+1)*v).filter(v=> n%v===1)[0];