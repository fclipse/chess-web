class Piece {
    constructor(type, color, position) {
        this.type = type;
        this.color = color;
        this.position = position;
    }
}
class Pawn extends Piece {
    constructor(color, position) {
        super('p', color, position);
        this.piece = color === 'white' ? '♙' : '♟';
        this.move = {

        }
    }

    move() {
        if (this.color === 'white') {
            return [[0, 1]];
        } else {
            return [[0, -1]];
        }
    }

    isMovable(targetTile) {
        let currTileEle = getTargetTileElement(this.position);
        let targetTileEle = getTargetTileElement(targetTile);

        if (targetTileEle.innerText && !isKillable(currTileEle, targetTileEle)) {
            return false;
        }
        return true;
    }

    isKillable(targetTileEle) {
        return targetTileEle.classList.contains('black') !== targetTileEle.classList.contains('black');
    }
}
class Rook extends Piece {
    constructor(color, position) {
        super('r', color, position);
        this.piece = color === 'white' ? '♖' : '♜';
    }

    move() {
        return [[0, 1], [0, -1], [1, 0], [-1, 0]];
    }

    isMovable(targetTile) {
        let currTileEle = getTargetTileElement(this.position);
        let targetTileEle = getTargetTileElement(targetTile);

        if (targetTileEle.innerText && !isKillable(currTileEle, targetTileEle)) {
            return false;
        }
        return true;
    }

    isKillable(targetTileEle) {
        return targetTileEle.classList.contains('black') !== targetTileEle.classList.contains('black');
    }
}

const pieces = {
    white: {
        p: '♙',
        r: '♖',
        n: '♘',
        b: '♗',
        q: '♕',
        k: '♔',
    },
    black: {
        p: '♟',
        r: '♜',
        n: '♞',
        b: '♝',
        q: '♛',
        k: '♚',
    }
};

const piecesMap = {
    '♙': {
        name: 'pawn',
        color: 'white',
        type: 'p'
    },
    '♖': {
        name: 'rook',
        color: 'white',
        type: 'r'
    },
    '♘': {
        name: 'knight',
        color: 'white',
        type: 'n'
    },
    '♗': {
        name: 'bishop',
        color: 'white',
        type: 'b'
    },
    '♕': {
        name: 'queen',
        color: 'white',
        type: 'q'
    },
    '♔': {
        name: 'king',
        color: 'white',
        type: 'k'
    },
    '♟': {
        name: 'pawn',
        color: 'black',
        type: 'p'
    },
    '♜': {
        name: 'rook',
        color: 'black',
        type: 'r'
    },
    '♞': {
        name: 'knight',
        color: 'black',
        type: 'n'
    },
    '♝': {
        name: 'bishop',
        color: 'black',
        type: 'b'
    },
    '♛': {
        name: 'queen',
        color: 'black',
        type: 'q'
    },
    '♚': {
        name: 'king',
        color: 'black',
        type: 'k'
    },
};

const pieceMovement = {
    p: {
        white: {
            firstMove: [[0, 1], [0, 2]],
            move: [[0, 1]],
            kill: [[-1, 1], [1, 1]],
        },
        black: {
            firstMove: [[0, -1], [0, -2]],
            move: [[0, -1]],
            kill: [[-1, -1], [1, -1]],
        },
    },
    r: {
        move: [[0, 1], [0, -1], [1, 0], [-1, 0]],
    },
};