// parseInt(x,2) => 10진수로 변경 , toString(2) => 2진수로 변경
const solution = (bin1, bin2) => (parseInt(bin1,2) + parseInt(bin2,2)).toString(2);