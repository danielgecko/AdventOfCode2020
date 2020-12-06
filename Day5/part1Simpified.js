const fs = require('fs')

const seats = fs.readFileSync('input.txt')
                .toString()
                .split('\n')
                .map(s => s.replace(/\r$/, ''))
                .filter(s => s.length > 0);

let seatIds = [];

seats.forEach(seat => {
    const rowId = seat.slice(0,7);
    const columnId = seat.slice(7);

    let rowBinary = '';
    let columnBinary = '';

    for(i=0; i<rowId.length; i++){
        rowBinary += rowId[i] == 'B' ? '1' : '0';
    }
    for(i=0; i<columnId.length; i++){
        columnBinary += rowId[i] == 'R' ? '1' : '0';
    }

    const rowNumber = parseInt(rowBinary, 2);
    const columnNumber = parseInt(columnBinary, 2);
    const seatId = rowNumber * 8 + columnNumber;
    seatIds.push(seatId);
});

console.log(Math.max(...seatIds));
