const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let currentPlayer = 'Boy';

function render() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        if (board[index] === 'Boy') {
            box.innerHTML = '   <img src="./img/boy.png" alt="" class = "boy">'
        } else if (board[index] === 'girl') {
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
    if (currentPlayer === 'Boy') {
        currentPlayer = 'girl';
    } else {
        currentPlayer = 'Boy';
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
    if (isplayer([0, 1, 2], 'Boy')) {
        alert('Boy wins')
    } else if (isplayer([3, 4, 5], 'Boy')) {
        alert('Boy wins')
    } else if (isplayer([6, 7, 8], 'Boy')) {
        alert('Boy wins')
    } else if (isplayer([0, 3, 6], 'Boy')) {
        alert('Boy wins')
    } else if (isplayer([1, 4, 7], 'Boy')) {
        alert('Boy wins')
    } else if (isplayer([2, 5, 8], 'Boy')) {
        alert('Boy wins')
    } else if (isplayer([0, 4, 8], 'Boy')) {
        alert('Boy wins')
    } else if (isplayer([2, 4, 6], 'BOY')) {
        alert('Boy wins')
    }

    if (isplayer([0, 1, 2], 'girl')) {
        alert('girl wins')
    } else if (isplayer([3, 4, 5], 'girl')) {
        alert('girl wins')
    } else if (isplayer([6, 7, 8], 'girl')) {
        alert('girl wins')
    } else if (isplayer([0, 3, 6], 'girl')) {
        alert('girl wins')
    } else if (isplayer([1, 4, 7], 'girl')) {
        alert('girl wins')
    } else if (isplayer([2, 5, 8], 'girl')) {
        alert('girl wins')
    } else if (isplayer([0, 4, 8], 'girl')) {
        alert('girl wins')
    } else if (isplayer([2, 4, 6], 'girl')) {
        alert('girl wins')
    }



}
function checkDraw() {
    let pop = document.getElementById('popop');
    if (!board.includes(-1)) {
        pop.style.visibility = 'visible'
    }
}
