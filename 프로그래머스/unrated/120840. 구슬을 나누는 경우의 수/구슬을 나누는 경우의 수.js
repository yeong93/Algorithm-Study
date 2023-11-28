const factorial = (n) => {
    let num = 1;
    for(let i=n; n>1; n--) num*=n;
    return num
}

const solution = (balls, share) => Math.round(factorial(balls) / (factorial(balls-share)*factorial(share)))
