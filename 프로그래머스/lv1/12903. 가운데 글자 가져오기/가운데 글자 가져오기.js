const solution = s => s.length%2===0 ? [...s].splice(s.length/2-1,2).join('') : [...s].splice(Math.floor(s.length/2),1).join('');