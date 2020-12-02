const fs = require('fs');

const passwords = fs.readFileSync('input.txt')
                    .toString()
                    .split('\n')
                    .map(s => s.replace(/\r$/, ''))
                    .filter(s => s.length > 0);

let count = 0;

passwords.forEach((password, index) => {
    const stringParts = password.split(' ');

    const times = stringParts[0];
    const letter = stringParts[1].split(':')[0];
    const pass = stringParts[2];
    const min = parseInt(times.split('-')[0]);
    const max = parseInt(times.split('-')[1]);

    checkCriteria(min, max, letter, pass);

});

function checkCriteria(min, max, letter, password){
    let regex = new RegExp(letter, "gi");
    let matching = password.match(regex);

    if(matching !== null){
        if(min <= matching.length && matching.length <= max){
            count++;
        }
    }
}

console.log(count);
