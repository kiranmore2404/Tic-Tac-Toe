const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let currentPlayer = 'x';

function render() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        if (board[index] === 'x') {
            box.innerHTML = '   <img src="./img/boy.png" alt="" class = "boy">'
        } else if (board[index] === 'o') {
            box.innerHTML = '   <img src="./img/girl.png" alt="" class  = "girl">';
        } else {
            box.innerHTML = '';
        }
    })

}
function selector(index) {
    if (board[index] !== -1) {
        alert('invalid move')
        return;
    }
    board[index] = currentPlayer;
    render();
    if (currentPlayer === 'x') {
        currentPlayer = 'o';
    } else {
        currentPlayer = 'x';
    }

    let currentPlayerele = document.getElementById('curet-play')
    currentPlayerele.innerText = currentPlayer;

    winpattern()
    checkDraw()





}


function isplayer(places, players) {
    let a = places[0];
    let b = places[1];
    let c = places[2];
    if (board[a] == players && board[b] == players && board[c] == players) {
        return true
    } else {
        return false
    }
}

function winpattern() {
    if (isplayer([0, 1, 2], 'x')) {
        alert('x wins')
    } else if (isplayer([3, 4, 5], 'x')) {
        alert('x wins')
    } else if (isplayer([6, 7, 8], 'x')) {
        alert('x wins')
    } else if (isplayer([0, 3, 6], 'x')) {
        alert('x wins')
    } else if (isplayer([1, 4, 7], 'x')) {
        alert('x wins')
    } else if (isplayer([2, 5, 8], 'x')) {
        alert('x wins')
    } else if (isplayer([0, 4, 8], 'x')) {
        alert('x wins')
    } else if (isplayer([2, 4, 6], 'x')) {
        alert('x wins')
    }

    if (isplayer([0, 1, 2], 'o')) {
        alert('o wins')
    } else if (isplayer([3, 4, 5], 'o')) {
        alert('o wins')
    } else if (isplayer([6, 7, 8], 'o')) {
        alert('o wins')
    } else if (isplayer([0, 3, 6], 'o')) {
        alert('o wins')
    } else if (isplayer([1, 4, 7], 'o')) {
        alert('o wins')
    } else if (isplayer([2, 5, 8], 'o')) {
        alert('o wins')
    } else if (isplayer([0, 4, 8], 'o')) {
        alert('o wins')
    } else if (isplayer([2, 4, 6], 'o')) {
        alert('o wins')
    }



}
function checkDraw() {
    let pop = document.getElementById('popop');
    if (!board.includes(-1)) {
        pop.style.visibility = 'visible'
    }
}
