const fs = require('fs');

const passports = fs.readFileSync('input.txt')
                    .toString()
                    .split('\n\n')
                    .map(s => s.replace(/\n/g, ' ').trim());

let validCount = 0;

passports.forEach(passport => {
    const components = passport.split(' ').sort();
    if(components.length === 8){
        components.splice(1,1);
        runValidation(components);
    }
    else if(components.length === 7){
        if(!passport.match(/cid/)){
            runValidation(components);
        }
    }
});

function runValidation(components){
    if(validateBirthYear(components[0].split(':')[1]) &&
        validateEyeColour(components[1].split(':')[1]) &&
        validateExpirationYear(components[2].split(':')[1]) &&
        validateHairColour(components[3].split(':')[1]) &&
        validateHeight(components[4].split(':')[1]) &&
        validateIssueYear(components[5].split(':')[1]) &&
        validatePassID(components[6].split(':')[1])){
            validCount++;
    }
}

function validateBirthYear(birthYear){
    const year = parseInt(birthYear);
    if(year >= 1920 && year <=2002){
        return true;
    }
}

function validateEyeColour(eyeColour){
    if(eyeColour.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/)) {
        return true;
    }
}

function validateExpirationYear(expYear){
    const year = parseInt(expYear);
    if(year >= 2020 && year <= 2030){
        return true;
    }
}

function validateHairColour(hairColour){
    if(/^#([0-9a-f]){6}$/gi.test(hairColour)){
        return true;
    }
}

function validateHeight(height){
    if(height.includes('cm') || height.includes('in')){
        if(height.includes('cm')){
            const cm = height.split('cm')[0];
            if(cm >= 150 && cm <= 193){
                return true;
            }
        }
        else{
            const inches = height.split('in')[0];
            if(inches >= 59 && inches <= 76){
                return true;
            }
        }
    }
}

function validateIssueYear(issueYear){
    const year = parseInt(issueYear);
    if(year >= 2010 && year <= 2020){
        return true;
    }
}

function validatePassID(passID){
    if(passID.length == 9){
        return true;
    }
}

console.log(validCount);
