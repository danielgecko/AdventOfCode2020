const fs = require('fs');

const passwords = fs.readFileSync('input.txt')
                    .toString()
                    .split('\n')
                    .map(s => s.replace(/\r$/, ''))
                    .filter(s => s.length > 0);

let count = 0;

passwords.forEach((password, index) => {
    const stringParts = password.split(' ');

    const positions = stringParts[0];
    const letter = stringParts[1].split(':')[0];
    const pass = stringParts[2];
    const pos1 = parseInt(positions.split('-')[0]);
    const pos2 = parseInt(positions.split('-')[1]);

    checkCriteria(pos1, pos2, letter, pass);

});

function checkCriteria(pos1, pos2, letter, password){
    const letter1 = password[pos1-1];
    const letter2 = password[pos2-1];

    if(letter1 == letter && letter2 == letter){
        //do nothing
    }
    else if(letter1 == letter || letter2 == letter){
        count++;
    }
}

console.log(count);
