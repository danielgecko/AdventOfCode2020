const fs = require('fs');

const input = fs.readFileSync('input.txt')
                .toString()
                .split('\n')
                .map(s => s.replace(/\r$/, ''))
                .map(s => s.replace('.', ''))
                .filter(s => s.length > 0);

const myBag = 'shiny gold bags';
const chain = [];
let store = [];
let count = 0;

findInners(input, myBag);

function findInners(inputArray, bagToOpen){
    let insideBag = '';
    let outerBag = '';
    let innerBags = [];
    let innerExpanded = [];
    let regex = new RegExp(`^${bagToOpen}`, "i");

    inputArray.forEach(rule => {
        if(rule.match(regex)){
            outerBag = rule.split('contain')[0].trim();
            innerBags = rule.split('contain')[1].trim();
            innerBags = innerBags.split(', ');

            innerBags.forEach(innerBag => {
                let numOfSameBag = parseInt(innerBag.substring(0,1));
                let name = innerBag.substring(2);

                for(i=0; i<numOfSameBag; i++){

                    innerExpanded.push(name);
                }
            });

        }
    });

    store = [...innerExpanded];
    count += innerExpanded.length;

    store.forEach(bag => {
        findInners(inputArray, bag);
    });

}

console.log(count);
