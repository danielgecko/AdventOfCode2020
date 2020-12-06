const fs = require('fs')

const seats = fs.readFileSync('input.txt')
                .toString()
                .split('\n')
                .map(s => s.replace(/\r$/, ''))
                .filter(s => s.length > 0);

const rows = [...Array(128).keys()];
const columns = [...Array(8).keys()];
let seatIDs = [];

seats.forEach(seat => {
    const rowID = seat.slice(0,7);
    const columnID = seat.slice(7);

    const rowNumber = findNumber(rowID, rows);
    const columnNumber = findNumber(columnID, columns);

    seatIDs.push(rowNumber * 8 + columnNumber);

});

function findNumber(id, array){
    let remaining = [...array];

    for(i=0; i < id.length; i++){
        let half = remaining.length / 2;
        if(id[i] == 'B' || id[i] == 'R'){
            remaining.splice(0, half);
        }
        else{
            remaining.splice(half);
        }
    }

    return remaining[0];
}

console.log(Math.max(...seatIDs));
