const fs = require('fs');

const instructions = fs.readFileSync('input.txt')
                       .toString()
                       .split('\n')
                       .map(s => s.replace(/\r$/, ''))
                       .filter(s => s.length > 0);

let visitedInstructions = [];
let currentRuleNum = 0;
let accumulator = 0;

while(!visitedInstructions.includes(currentRuleNum)){
    if(instructions[currentRuleNum].substring(0,3) == 'nop'){
        visitedInstructions.push(currentRuleNum);
        currentRuleNum++;
    }
    else if(instructions[currentRuleNum].substring(0,3) == 'acc'){
        visitedInstructions.push(currentRuleNum);

        if(instructions[currentRuleNum].substr(4,1) == '+'){
            accumulator += parseInt(instructions[currentRuleNum].substring(5))
        }
        else if(instructions[currentRuleNum].substr(4,1) == '-'){
            accumulator -= parseInt(instructions[currentRuleNum].substring(5))
        }
        currentRuleNum++;
    }
    else if(instructions[currentRuleNum].substring(0,3) == 'jmp'){
        visitedInstructions.push(currentRuleNum);
        if(instructions[currentRuleNum].substr(4,1) == '+'){
            currentRuleNum += parseInt(instructions[currentRuleNum].substring(5))
        }
        else if(instructions[currentRuleNum].substr(4,1) == '-'){
            currentRuleNum -= parseInt(instructions[currentRuleNum].substring(5))
        }
    }
}

console.log('repeated rule is ' + instructions[currentRuleNum], currentRuleNum);
console.log('answer is ' + accumulator);
