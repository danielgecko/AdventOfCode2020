const fs = require('fs');

const groupAnswers = fs.readFileSync('input.txt')
                        .toString()
                        .trim()
                        .split('\n\n');

let count = 0;

groupAnswers.forEach((answers, i) => {
    let groupArray = answers.split('\n');
    let firstPersonArray = groupArray[0].split('');

    firstPersonArray.forEach((answer, i) => {
        let numberOfYes = countInArray(groupArray, answer);

        if(numberOfYes == groupArray.length){
            count++;
        }
    });

});

function countInArray(array, letter) {
    let letterCount = (array.toString().match(new RegExp(letter, "g")) || []).length;

    return letterCount;
}

console.log(count);
