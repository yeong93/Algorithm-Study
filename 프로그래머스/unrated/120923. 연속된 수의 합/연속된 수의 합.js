const solution = (num, total) => new Array(num).fill(0).map((v,i) => Math.ceil(total/num)- Math.floor(num/2)+i)
