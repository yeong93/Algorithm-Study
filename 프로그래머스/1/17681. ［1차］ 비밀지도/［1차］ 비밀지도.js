function solution(n, arr1, arr2) {
    let tmpArr1 = arr1.map((v,i) => v.toString(2).padStart(n,"0").split(''));
    let tmpArr2 = arr2.map((v,i) => v.toString(2).padStart(n,"0").split(''));

    let answer = tmpArr1.map((v,i) => {
        let row = v.map((val,idx) => {
            return +val===1 || +tmpArr2[i][idx]===1 ? '#' : ' '
        })
        return row.join('')
    })
    return answer
}