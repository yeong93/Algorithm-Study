const solution = age => 
age.toString().split('').reduce((acc,cur) => acc += String.fromCharCode(Number(cur)+97), '');    