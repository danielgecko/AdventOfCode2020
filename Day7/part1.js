const fs = require('fs');

const input = fs.readFileSync('input.txt')
                .toString()
                .split('\n')
                .map(s => s.replace(/\r$/, ''))
                .filter(s => s.length > 0);

let allParents = [];
const myBag = ['shiny gold bag'];
let count = 0;

findParentsOf(myBag);

function findParentsOf(bags){
    let parentBags = [];
    input.forEach((rule, i) => {
        let outerBag = rule.split('contain')[0].trim();
        outerBag = outerBag.split('bag')[0].trim();
        const innerBags = rule.split('contain')[1].trim();

        for(i=0; i<bags.length; i++){
            if(innerBags.match(new RegExp(bags[i], "g"))){
                parentBags.push(outerBag);
            }
        }
    });

    let uniqueParents = [...new Set(parentBags)];

    allParents = [...allParents, ...uniqueParents];

    if(count !== allParents.length){
        count = allParents.length;
        findParentsOf(uniqueParents);
    }
}

let unique = [...new Set(allParents)];

console.log(unique.length);
