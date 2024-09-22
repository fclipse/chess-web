// 8*8 chess board array생성
let board = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null));

// 8*8 chess board array에 말 배치
// r: black rook, n: black knight, b: black bishop, q: black queen, k: black king, p: black pawn
// R: white rook, N: white knight, B: white bishop, Q: white queen, K: white king, P: white pawn
board[0] = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];
board[1] = ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'];
board[6] = ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'];
board[7] = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];

// 말의 이동 가능한 위치를 계산하는 함수
const getAvailableMovements = (piece, x, y) => {
    const movements = [];
    switch (piece) {
        case 'p':
            if (board[x - 1][y] === null) {
                movements.push([x - 1, y]);
            }
            if (x === 6 && board[x - 2][y] === null) {
                movements.push([x - 2, y]);
            }
            if (board[x - 1][y - 1] !== null && board[x - 1][y - 1].toUpperCase() === board[x - 1][y - 1]) {
                movements.push([x - 1, y - 1]);
            }
            if (board[x - 1][y + 1] !== null && board[x - 1][y + 1].toUpperCase() === board[x - 1][y + 1]) {
                movements.push([x - 1, y + 1]);
            }
            break;
        case 'P':
            if (board[x + 1][y] === null) {
                movements.push([x + 1, y]);
            }
            if (x === 1 && board[x + 2][y] === null) {
                movements.push([x + 2, y]);
            }
            if (board[x + 1][y - 1] !== null && board[x + 1][y - 1].toLowerCase() === board[x + 1][y - 1]) {
                movements.push([x + 1, y - 1]);
            }
            if (board[x + 1][y + 1] !== null && board[x + 1][y + 1].toLowerCase() === board[x + 1][y + 1]) {
                movements.push([x + 1, y + 1]);
            }
            break;
        case 'r':
        case 'R':
            for (let i = x - 1; i >= 0; i--) {
                if (board[i][y] === null) {
                    movements.push([i, y]);
                } else {
                    if (board[i][y].toUpperCase() === board[i][y]) {
                        break;
                    } else {
                        movements.push([i, y]);
                        break;
                    }
                }
            }
            for (let i = x + 1; i < 8; i++) {
                if (board[i][y] === null) {
                    movements.push([i, y]);
                } else {
                    if (board[i][y].toUpperCase() === board[i][y]) {
                        break;
                    } else {
                        movements.push([i, y]);
                        break;
                    }
                }
            }
            for (let i = y - 1; i >= 0; i--) {
                if (board[x][i] === null) {
                    movements.push([x, i]);
                } else {
                    if (board[x][i].toUpperCase() === board[x][i]) {
                        break;
                    } else {
                        movements.push([x, i]);
                        break;
                    }
                }
            }
            for (let i = y + 1; i < 8; i++) {
                if (board[x][i] === null) {
                    movements.push([x, i]);
                } else {
                    if (board[x][i].toUpperCase() === board[x][i]) {
                        break;
                    } else {
                        movements.push([x, i]);
                        break;
                    }
                }
            }
            break;
        case 'n':
        case 'N':
            if (x - 2 >= 0 && y - 1 >= 0 && (board[x - 2][y - 1] === null || board[x - 2][y - 1].toUpperCase() === board[x - 2][y - 1])) {
                movements.push([x - 2, y - 1]);
            }
            if (x - 2 >= 0 && y + 1 < 8 && (board[x - 2][y + 1] === null || board[x - 2][y + 1].toUpperCase() === board[x - 2][y + 1])) {
                movements.push([x - 2, y + 1]);
            }
            if (x + 2 < 8 && y - 1 >= 0 && (board[x + 2][y - 1] === null || board[x + 2][y - 1].toUpperCase() === board[x + 2][y - 1])) {
                movements.push([x + 2, y - 1]);
            }
            if (x + 2 < 8 && y + 1 < 8 && (board[x + 2][y + 1] === null || board[x + 2][y + 1].toUpperCase() === board[x + 2][y + 1])) {
                movements.push([x + 2, y + 1]);
            }
            if (x - 1 >= 0 && y - 2 >= 0 && (board[x - 1][y - 2] === null || board[x - 1][y - 2].toUpperCase() === board[x - 1][y - 2])) {
                movements.push([x - 1, y - 2]);
            }
            if (x - 1 >= 0 && y + 2 < 8 && (board[x - 1][y + 2] === null || board[x - 1][y + 2].toUpperCase() === board[x - 1][y + 2])) {
                movements.push([x - 1, y + 2]);
            }
            if (x + 1 < 8 && y - 2 >= 0 && (board[x + 1][y - 2] === null || board[x + 1][y - 2].toUpperCase() === board[x + 1][y - 2])) {
                movements.push([x + 1, y - 2]);
            }
            if (x + 1 < 8 && y + 2 < 8 && (board[x + 1][y + 2] === null || board[x + 1][y + 2].toUpperCase() === board[x + 1][y + 2])) {
                movements.push([x + 1, y + 2]);
            }
            break;
        case 'b':
        case 'B':
            for (let i = 1; x - i >= 0 && y - i >= 0; i++) {
                if (board[x - i][y - i] === null) {
                    movements.push([x - i, y - i]);
                } else {
                    if (board[x - i][y - i].toUpperCase() === board[x - i][y - i]) {
                        break;
                    } else {
                        movements.push([x - i, y - i]);
                        break;
                    }
                }
            }
            for (let i = 1; x - i >= 0 && y + i < 8; i++) {
                if (board[x - i][y + i] === null) {
                    movements.push([x - i, y + i]);
                } else {
                    if (board[x - i][y + i].toUpperCase() === board[x - i][y + i]) {
                        break;
                    } else {
                        movements.push([x - i, y + i]);
                        break;
                    }
                }
            }
            for (let i = 1; x + i < 8 && y - i >= 0; i++) {
                if (board[x + i][y - i] === null) {
                    movements.push([x + i, y - i]);
                } else {
                    if (board[x + i][y - i].toUpperCase() === board[x + i][y - i]) {
                        break;
                    } else {
                        movements.push([x + i, y - i]);
                        break;
                    }
                }
            }
            for (let i = 1; x + i < 8 && y + i < 8; i++) {
                if (board[x + i][y + i] === null) {
                    movements.push([x + i, y + i]);
                } else {
                    if (board[x + i][y + i].toUpperCase() === board[x + i][y + i]) {
                        break;
                    } else {
                        movements.push([x + i, y + i]);
                        break;
                    }
                }
            }
            break;
        case 'q':
        case 'Q':
            for (let i = x - 1; i >= 0; i--) {
                if (board[i][y] === null) {
                    movements.push([i, y]);
                } else {
                    if (board[i][y].toUpperCase() === board[i][y]) {
                        break;
                    } else {
                        movements.push([i, y]);
                        break;
                    }
                }
            }
            for (let i = x + 1; i < 8; i++) {
                if (board[i][y] === null) {
                    movements.push([i, y]);
                } else {
                    if (board[i][y].toUpperCase() === board[i][y]) {
                        break;
                    } else {
                        movements.push([i, y]);
                        break;
                    }
                }
            }
            for (let i = y - 1; i >= 0; i--) {
                if (board[x][i] === null) {
                    movements.push([x, i]);
                } else {
                    if (board[x][i].toUpperCase() === board[x][i]) {
                        break;
                    } else {
                        movements.push([x, i]);
                        break;
                    }
                }
            }
            for (let i = y + 1; i < 8; i++) {
                if (board[x][i] === null) {
                    movements.push([x, i]);
                } else {
                    if (board[x][i].toUpperCase() === board[x][i]) {
                        break;
                    } else {
                        movements.push([x, i]);
                        break;
                    }
                }
            }
            for (let i = 1; x - i >= 0 && y - i >= 0; i++) {
                if (board[x - i][y - i] === null) {
                    movements.push([x - i, y - i]);
                } else {
                    if (board[x - i][y - i].toUpperCase() === board[x - i][y - i]) {
                        break;
                    } else {
                        movements.push([x - i, y - i]);
                        break;
                    }
                }
            }
            for (let i = 1; x - i >= 0 && y + i < 8; i++) {
                if (board[x - i][y + i] === null) {
                    movements.push([x - i, y + i]);
                }
                else {
                    if (board[x - i][y + i].toUpperCase() === board[x - i][y + i]) {
                        break;
                    } else {
                        movements.push([x - i, y + i]);
                        break;
                    }
                }
            }
            for (let i = 1; x + i < 8 && y - i >= 0; i++) {
                if (board[x + i][y - i] === null) {
                    movements.push([x + i, y - i]);
                } else {
                    if (board[x + i][y - i].toUpperCase() === board[x + i][y - i]) {
                        break;
                    } else {
                        movements.push([x + i, y - i]);
                        break;
                    }
                }
            }
            for (let i = 1; x + i < 8 && y + i < 8; i++) {
                if (board[x + i][y + i] === null) {
                    movements.push([x + i, y + i]);
                } else {
                    if (board[x + i][y + i].toUpperCase() === board[x + i][y + i]) {
                        break;
                    } else {
                        movements.push([x + i, y + i]);
                        break;
                    }
                }
            }
            break;
        case 'k':
        case 'K':
            if (x - 1 >= 0 && y - 1 >= 0 && (board[x - 1][y - 1] === null || board[x - 1][y - 1].toUpperCase() === board[x - 1][y - 1])) {
                movements.push([x - 1, y - 1]);
            }
            if (x - 1 >= 0 && (board[x - 1][y] === null || board[x - 1][y].toUpperCase() === board[x - 1][y])) {
                movements.push([x - 1, y]);
            }
            if (x - 1 >= 0 && y + 1 < 8 && (board[x - 1][y + 1] === null || board[x - 1][y + 1].toUpperCase() === board[x - 1][y + 1])) {
                movements.push([x - 1, y + 1]);
            }
            if (y - 1 >= 0 && (board[x][y - 1] === null || board[x][y - 1].toUpperCase() === board[x][y - 1])) {
                movements.push([x, y - 1]);
            }
            if (y + 1 < 8 && (board[x][y + 1] === null || board[x][y + 1].toUpperCase() === board[x][y + 1])) {
                movements.push([x, y + 1]);
            }
            if (x + 1 < 8 && y - 1 >= 0 && (board[x + 1][y - 1] === null || board[x + 1][y - 1].toUpperCase() === board[x + 1][y - 1])) {
                movements.push([x + 1, y - 1]);
            }
            if (x + 1 < 8 && (board[x + 1][y] === null || board[x + 1][y].toUpperCase() === board[x + 1][y])) {
                movements.push([x + 1, y]);
            }
            if (x + 1 < 8 && y + 1 < 8 && (board[x + 1][y + 1] === null || board[x + 1][y + 1].toUpperCase() === board[x + 1][y + 1])) {
                movements.push([x + 1, y + 1]);
            }
            break;
    }
    return movements;
}

// 말의 이동 가능한 위치를 출력하는 함수
const printAvailableMovements = (piece, x, y) => {
    const movements = getAvailableMovements(piece, x, y);
    console.log(movements);
}

// 말의 이동 가능한 위치를 출력하는 함수를 호출 (예시)
// printAvailableMovements('p', 6, 0); // [[5, 0], [4, 0]]