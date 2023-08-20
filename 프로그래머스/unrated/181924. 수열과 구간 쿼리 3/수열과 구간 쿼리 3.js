function solution(arr, queries) {
    queries.map(([from,to])=>[arr[from],arr[to]] = [arr[to],arr[from]]);
    return arr;
}