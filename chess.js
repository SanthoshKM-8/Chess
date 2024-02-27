// let b;
let cp;
class ChessBoard {
    row;
    col;
    toRow;
    toCol;
    flag = false;
    constructor() {
        // this.board = this.createEmptyBoard();
        this.chessPieces = Array(32);
        cp = this.chessPieces;
        // b = this.board;
        this.renderBoard();
        this.placePieces();
    }

    createEmptyBoard() {
        return Array.from({ length: 8 }, () => Array(8).fill(null));
    }

    placePieces() {
        // Initialize pieces on the board

        // // White Pieces
        // this.board[0][0] = new Rook("white",0,0);
        // this.board[0][1] = new Knight("white",0,1);
        // this.board[0][2] = new Bishop("white",0,2);
        // this.board[0][3] = new King("white",0,3);
        // this.board[0][4] = new Queen("white",0,4);
        // this.board[0][5] = new Bishop("white",0,5);
        // this.board[0][6] = new Knight("white",0,6);
        // this.board[0][7] = new Rook("white",0,7);
        // for (let i = 0; i < 8; i++) {
        //     this.board[1][i] = new Pawn("white",1,i);
        // }

        // // Black Pieces
        // for (let i = 0; i < 8; i++) {
        //     this.board[6][i] = new Pawn("black",6,i);
        // }
        // this.board[7][0] = new Rook("black",7,0);
        // this.board[7][1] = new Knight("black",7,1);
        // this.board[7][2] = new Bishop("black",7,2);
        // this.board[7][3] = new King("black",7,3);
        // this.board[7][4] = new Queen("black",7,4);
        // this.board[7][5] = new Bishop("black",7,5);
        // this.board[7][6] = new Knight("black",7,6);
        // this.board[7][7] = new Rook("black",7,7);

        // // Render Pieces
        // for (let i of [0, 1, 6, 7]) {
        //     for (let j = 0; j < 8; j++) {
        //         this.board[i][j].render();
        //     }
        // }

        // // Render Empty Piece for remaining cells
        // // const emptyPiece = new ChessPiece();
        // for (let i of [2, 3, 4, 5]) {
        //     for (let j = 0; j < 8; j++) {
        //         new ChessPiece("Empty", i, j).render();
        //     }
        // }


        // White Pieces
        this.chessPieces[0] = new Rook("white", 0, 0);
        this.chessPieces[1] = new Knight("white", 0, 1);
        this.chessPieces[2] = new Bishop("white", 0, 2);
        this.chessPieces[3] = new King("white", 0, 3);
        this.chessPieces[4] = new Queen("white", 0, 4);
        this.chessPieces[5] = new Bishop("white", 0, 5);
        this.chessPieces[6] = new Knight("white", 0, 6);
        this.chessPieces[7] = new Rook("white", 0, 7);
        for (let i = 8; i < 16; i++) {
            this.chessPieces[i] = new Pawn("white", 1, i - 8);
        }

        // Black Pieces
        for (let i = 16; i < 24; i++) {
            this.chessPieces[i] = new Pawn("black", 6, i - 16);
        }
        this.chessPieces[24] = new Rook("black", 7, 0);
        this.chessPieces[25] = new Knight("black", 7, 1);
        this.chessPieces[26] = new Bishop("black", 7, 2);
        this.chessPieces[27] = new King("black", 7, 3);
        this.chessPieces[28] = new Queen("black", 7, 4);
        this.chessPieces[29] = new Bishop("black", 7, 5);
        this.chessPieces[30] = new Knight("black", 7, 6);
        this.chessPieces[31] = new Rook("black", 7, 7);

        // Render Pieces
        for (let i = 0; i < 32; i++) {
            this.chessPieces[i].render();
        }

        // Render Empty Piece for remaining cells
        // const emptyPiece = new ChessPiece();
        for (let i of [2, 3, 4, 5]) {
            for (let j = 0; j < 8; j++) {
                new ChessPiece("empty", i, j).render();
            }
        }
        console.log(this.chessPieces);
    }

    renderBoard() {
        const chessboard = document.querySelector('#chessboard');
        const fragment = new DocumentFragment();
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.addEventListener('click', function () {
                    console.log();
                    // handleCellClick(this.dataset.row, this.dataset.col);
                    ChessBoard.handleCellClick(this.dataset.row, this.dataset.col);
                    // console.log(this.dataset.row);
                });
                const cellColor = ((i + j) % 2 == 0) ? '#eeeed2' : '#769656';
                cell.style.backgroundColor = cellColor;
                fragment.append(cell);
            }
        }
        chessboard.append(fragment);
    }

    // static movePiece(fromRow, fromCol, toRow, toCol) {
    //     // console.log(`${fromRow} ${fromCol} ${toRow} ${toCol}`);
    //     if (b[fromRow][fromCol] != null && (b[toRow][toCol] == null || b[fromRow][fromCol].getColor() != b[toRow][toCol].getColor())) {
    //         const fPiece = b[fromRow][fromCol];
    //         b[toRow][toCol] = fPiece;
    //         b[fromRow][fromCol] = null;
    //         const fromPiece = document.querySelector(`.cell[data-row="${fromRow}"][data-col="${fromCol}"]`);
    //         const toPiece = document.querySelector(`.cell[data-row="${toRow}"][data-col="${toCol}"]`);
    //         const fromSrc = fromPiece.childNodes[0].src;
    //         fromPiece.childNodes[0].setAttribute('src', 'images/empty.png');
    //         toPiece.childNodes[0].setAttribute('src', fromSrc);
    //         console.log(b);
    //     }
    // }

    static movePiece(fromRow, fromCol, toRow, toCol) {
        // console.log(`${fromRow} ${fromCol} ${toRow} ${toCol}`);
        let fPiece = cp.find(({ row, col }) => row == fromRow && col == fromCol);
        let tPiece = cp.find(({ row, col }) => row == toRow && col == toCol);
        // console.log(fPiece);
        // console.log(tPiece);
        if (fPiece != tPiece && fPiece != undefined && (tPiece == undefined || fPiece.getColor() != tPiece.getColor())) {
            if (tPiece != undefined) {
                cp.splice(cp.indexOf(tPiece), 1);
            }
            fPiece.setPosition(Number(toRow), Number(toCol));
            const fromPiece = document.querySelector(`.cell[data-row="${fromRow}"][data-col="${fromCol}"]`);
            const toPiece = document.querySelector(`.cell[data-row="${toRow}"][data-col="${toCol}"]`);
            const fromSrc = fromPiece.childNodes[0].src;
            fromPiece.childNodes[0].setAttribute('src', 'images/empty.png');
            toPiece.childNodes[0].setAttribute('src', fromSrc);
        }
        console.log(cp);
    }

    isValidMove(piece, fromRow, fromCol, toRow, toCol) {

    }

    isCheckmate() {

    }

    isDraw() {

    }

    static handleCellClick(row, col) {
        // console.log(row + " " + col);
        if (this.flag) {
            ChessBoard.movePiece(this.row, this.col, row, col);
        } else {
            this.row = row;
            this.col = col;
        }
        this.flag = !this.flag;
    }
}



class ChessPiece {

    constructor(color, row, col) {
        this.color = color;
        this.row = row;
        this.col = col;
    }

    getColor() {
        return this.color;
    }

    getPosition() {
        return Array(this.row, this.col);
    }

    setPosition(row, col) {
        this.row = row;
        this.col = col;
    }

    getType() {
        return "Unknown";
    }

    render() {
        const cell = document.querySelector(`.cell[data-row="${this.row}"][data-col="${this.col}"]`);
        this.piece = document.createElement('img');
        this.piece.width = 75;
        this.piece.height = 75;
        this.piece.src = `images/empty.png`;
        cell.appendChild(this.piece);
    }

}

class Pawn extends ChessPiece {
    getType() {
        return "Pawn";
    }
    render() {
        super.render();
        this.piece.src = `images/${this.color === 'white' ? 'wp' : 'bp'}.png`;
    }
}

class Rook extends ChessPiece {
    getType() {
        return "Rook";
    }
    render() {
        super.render();
        this.piece.src = `images/${this.color === 'white' ? 'wr' : 'br'}.png`;
    }
}

class Knight extends ChessPiece {
    getType() {
        return "Knight";
    }
    render() {
        super.render();
        this.piece.src = `images/${this.color === 'white' ? 'wn' : 'bn'}.png`;
    }
}

class Bishop extends ChessPiece {
    getType() {
        return "Bishop";
    }
    render() {
        super.render();
        this.piece.src = `images/${this.color === 'white' ? 'wb' : 'bb'}.png`;
    }
}

class Queen extends ChessPiece {
    getType() {
        return "Queen";
    }
    render() {
        super.render();
        this.piece.src = `images/${this.color === 'white' ? 'wq' : 'bq'}.png`;
    }
}

class King extends ChessPiece {
    getType() {
        return "King";
    }
    render() {
        super.render();
        this.piece.src = `images/${this.color === 'white' ? 'wk' : 'bk'}.png`;
    }
}

const chess = new ChessBoard();