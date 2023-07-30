const solution = (intStrs, k, s, l) => 
intStrs.map((v) => v.slice(s,s+l)).map(Number).filter(item => item > k);