const solution = (my_string) => 
    [...my_string].map(v => v === v.toUpperCase() ? v.toLowerCase() :v.toUpperCase()).join('');