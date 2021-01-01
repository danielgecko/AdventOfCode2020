const fs = require('fs');

const xmas = fs.readFileSync('input.txt')
               .toString()
               .split('\n')
               .map(s => s.replace(/\r$/, ''))
               .filter(s => s.length > 0);

const target = 20874512;
let sum = 0;

xmas.forEach((number, i) => {
    let total = parseInt(number);
    let group = [];

    if(parseInt(number) == target){
        //do nothing
    }
    else{
        group.push(parseInt(xmas[i]))

        for(j=i+1; j<xmas.length; j++){
            if(total < target){
                group.push(parseInt(xmas[j]));
                total += parseInt(xmas[j]);
            }
            if(total == target){
                group.sort(function(a, b){return a-b});
                let first = group[0];
                let last = group[group.length - 1];
                let sum = first + last;
                console.log(sum);
                break;
            }

        }
    }
});
