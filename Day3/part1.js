const fs = require('fs');

const map = fs.readFileSync('input.txt')
              .toString()
              .split('\n')
              .map(s => s.replace(/\r$/, ''))
              .filter(s => s.length > 0)
              .map(s => s + '-')

let mapMatrix = [];
let x = 0;
let y = 0;
let treeCount = 0;

map.forEach(mapLine => {
    let newMapline = mapLine.split('');
    mapMatrix.push(newMapline);
});

while(y < map.length - 1){
    for(i=0; i < 3; i++){
        if(mapMatrix[y][x+1] !== '-'){
            x++;
        }
        else{
            x = 0;
        }
    }

    y++;

    if(mapMatrix[y][x] == '#'){
        treeCount++
    }
}

console.log(treeCount);
