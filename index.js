const chessboard = document.querySelector('#chessboard');
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        const cellColor = ((i + j) % 2 == 0) ? '#eeeed2' : '#769656';
        cell.style.backgroundColor = cellColor;
        chessboard.appendChild(cell);
    }
}

// Dynamic Chess Board
// var size = 8;
// const chessboard = document.querySelector('#chessboard');
// chessboard.style.width = size * 75 + 'px';
// chessboard.style.height = size * 75 + 'px';
// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         const cell = document.createElement('div');
//         cell.className = 'cell';
//         const cellColor = ((i + j) % 2 == 0) ? '#eeeed2' : '#769656';
//         cell.style.backgroundColor = cellColor;
//         chessboard.appendChild(cell);
//     }
// }

// Optimized Chess Board
// const chessboard = document.querySelector('#chessboard');
// const row = document.createElement('div');
// row.className = 'row';
// for(let i=0;i<8;i++) {
//     const cell = document.createElement('div');
//     cell.className = 'cell';
//     const cellColor = (i % 2 == 0) ? '#eeeed2' : '#769656';
//     cell.style.backgroundColor = cellColor;
//     row.appendChild(cell);
// }
// chessboard.appendChild(row);
// for(let i=0;i<7;i++) {
//     chessboard.appendChild(row.cloneNode(true));
// }