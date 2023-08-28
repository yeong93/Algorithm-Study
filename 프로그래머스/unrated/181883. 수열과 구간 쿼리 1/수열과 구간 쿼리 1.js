const solution = (arr, queries) => 
    queries.reduce((acc,[a,b]) => {
        for(let i=a; i<=b; i++){
            acc[i]+=1;
        }
        return acc
    },arr)