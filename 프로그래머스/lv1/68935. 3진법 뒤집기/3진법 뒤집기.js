function solution(n) {
    let num = n.toString(3).split('').reverse().join('')
    return parseInt(num,3)
}