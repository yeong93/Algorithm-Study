const solution = (arr, queries) => 
    queries.reduce((acc,[s,e,k]) => {
        for(let i=s; i<=e; i++){
            if(i%k===0) acc[i]++;
        }
        return acc
    },arr)