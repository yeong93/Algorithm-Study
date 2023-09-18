const solution = (name, yearning, photo) => 
photo.map(v => v.reduce((acc,cur,idx)=> {
    if(name.indexOf(cur) > -1){
        return acc += yearning[name.indexOf(cur)]    
    }else{
        return acc
    }
},0))