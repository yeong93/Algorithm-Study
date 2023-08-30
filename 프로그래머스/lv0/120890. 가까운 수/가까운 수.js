function solution(array, n) {
    let arr = array.sort().map(v=> Math.abs(v-n));
    let idx = arr.findIndex(v=> v === Math.min(...arr));
    return array[idx];
}