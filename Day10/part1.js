const fs = require('fs');

const adaptors = fs.readFileSync('input.txt')
                   .toString()
                   .split('\n')
                   .map(s => s.replace(/\r$/, ''))
                   .filter(s => s.length > 0);

let adaptorsOrdered = [0];
let countOne = 0;
let countThree = 0;

adaptors.forEach((adaptor, i) => {
    adaptorsOrdered.push(parseInt(adaptor));
});

adaptorsOrdered.sort(function(a, b){return a-b});
let largest = adaptorsOrdered[adaptorsOrdered.length-1];
adaptorsOrdered.push(largest+3);

for(i=0; i<adaptorsOrdered.length-1; i++){
    let number1 = adaptorsOrdered[i];
    let number2 = adaptorsOrdered[i+1];

    let diff = number2 - number1;

    if(diff == 1){
        countOne++;
    }
    else if(diff == 3){
        countThree++;
    }
}

let answer = countOne * countThree;
console.log(answer);
