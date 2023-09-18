const solution = (s, n) => 
[...s].map(v => {
    if (v == ' ') return v;
    const tmp = v.charCodeAt();
    return v.toUpperCase().charCodeAt()+n > 90 
    ? String.fromCharCode(tmp+n-26) 
    : String.fromCharCode(tmp+n)
}).join('');