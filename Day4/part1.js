const fs = require('fs');

const passports = fs.readFileSync('input.txt')
                    .toString()
                    .split('\n\n')
                    .map(s => s.replace(/\n/g, ' ').trim());

let validCount = 0;

passports.forEach(passport => {
    const components = passport.split(' ');
    if(components.length === 8){
        validCount++;
    }
    else if(components.length === 7){
        if(!passport.match(/cid/)){
            validCount++
        }
    }
});

console.log(validCount);
