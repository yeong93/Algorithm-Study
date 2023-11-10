const direction = {
    left:[-1,0],
    right:[1,0],
    up:[0,1],
    down:[0,-1]
}

function solution(keyinput, board) {
    var answer = [0,0];
    keyinput.map(val => {
        let [x,y] = direction[val];
        if(-Math.floor(board[0]/2) <= answer[0]+x && Math.floor(board[0]/2) >= answer[0]+x) answer[0]+=x;
        if(-Math.floor(board[1]/2) <= answer[1]+y && Math.floor(board[1]/2) >= answer[1]+y) answer[1]+=y;
    })
    return answer;
}