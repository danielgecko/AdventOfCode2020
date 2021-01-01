const fs = require('fs');

const xmas = fs.readFileSync('input.txt')
               .toString()
               .split('\n')
               .map(s => s.replace(/\r$/, ''))
               .filter(s => s.length > 0);

let currentNum = xmas[5];
let preamble = xmas.slice(0,5);

for(i=25; i<xmas.length; i++){
    currentNum = parseInt(xmas[i]);
    preamble = xmas.slice(i-25, i);
    let found = 0;

    preamble.forEach((entry1, index) => {
        let sum = 0;

        for(j=index+1; j<preamble.length; j++){
            let entry2 = preamble[j];

            sum = parseInt(entry1) + parseInt(entry2);
            if(sum == currentNum){
                found = 1;
            }
        }
    });

    if(found == 0){
        console.log(xmas[i]);
    }
}
