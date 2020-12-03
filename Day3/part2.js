const fs = require('fs');

const map = fs.readFileSync('input.txt')
              .toString()
              .split('\n')
              .map(s => s.replace(/\r$/, ''))
              .filter(s => s.length > 0)
              .map(s => s + '-')

let mapMatrix = [];

map.forEach(mapLine => {
    let newMapline = mapLine.split('');
    mapMatrix.push(newMapline);
});

function countTrees(right, down){
    let x = 0;
    let y = 0;
    let treeCount = 0;

    while(y < map.length - down){
        for(i=0; i < right; i++){
            if(mapMatrix[y][x+1] !== '-'){
                x++;
            }
            else{
                x = 0;
            }
        }

        y += down;

        if(mapMatrix[y][x] == '#'){
            treeCount++;
        }
    }
    return treeCount;
}

let route1 = countTrees(1,1)
let route2 = countTrees(3,1)
let route3 = countTrees(5,1)
let route4 = countTrees(7,1)
let route5 = countTrees(1,2)

let answer = route1 * route2 * route3 * route4 * route5;

console.log(answer);
