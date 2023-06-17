function solution(age) {
    let now = new Date();
    let year = now.getFullYear();
    return year - age;
}