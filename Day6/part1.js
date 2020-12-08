const fs = require('fs');

const groupAnswers = fs.readFileSync('input.txt')
                        .toString()
                        .split('\n\n')
                        .map(s => s.replace(/\n/g, '').trim());

let count = 0;

groupAnswers.forEach(answer => {
    let answerArray = answer.split('');
    let uniqueAnswers = [...new Set(answerArray)];

    count += uniqueAnswers.length;
});

console.log(count);
