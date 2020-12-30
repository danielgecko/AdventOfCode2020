const fs = require('fs');

const instructions = fs.readFileSync('input.txt')
                       .toString()
                       .split('\n')
                       .map(s => s.replace(/\r$/, ''))
                       .filter(s => s.length > 0);

let visitedInstructions = [];
let currentRuleNum = 0;
let accumulator = 0;
let switchedInstructions = [];
let found = 0;

instructions.forEach((instruction, i) => {
    if(found == 0){
        let newInstructions = [];
        newInstructions = [...instructions];

        if(instruction.substring(0,3) == 'nop'){
            newInstructions[i] = 'jmp ' + instruction.substring(4);
            runLoop(newInstructions);
        }
        else if(instruction.substring(0,3) == 'jmp'){
            newInstructions[i] = 'nop ' + instruction.substring(4);
            runLoop(newInstructions);
        }
    }
});

function runLoop(newInstructions){
    visitedInstructions = [];
    accumulator = 0;
    currentRuleNum = 0;

    while(!visitedInstructions.includes(currentRuleNum)){
        if(currentRuleNum >= newInstructions.length){
            found = 1;
            break;
        }
        if(newInstructions[currentRuleNum].substring(0,3) == 'nop'){
            visitedInstructions.push(currentRuleNum);
            currentRuleNum++;
        }
        else if(newInstructions[currentRuleNum].substring(0,3) == 'acc'){
            visitedInstructions.push(currentRuleNum);

            if(newInstructions[currentRuleNum].substr(4,1) == '+'){
                accumulator += parseInt(newInstructions[currentRuleNum].substring(5))
            }
            else if(newInstructions[currentRuleNum].substr(4,1) == '-'){
                accumulator -= parseInt(newInstructions[currentRuleNum].substring(5))
            }
            currentRuleNum++;
        }
        else if(newInstructions[currentRuleNum].substring(0,3) == 'jmp'){
            visitedInstructions.push(currentRuleNum);
            if(newInstructions[currentRuleNum].substr(4,1) == '+'){
                currentRuleNum += parseInt(newInstructions[currentRuleNum].substring(5))
            }
            else if(newInstructions[currentRuleNum].substr(4,1) == '-'){
                currentRuleNum -= parseInt(newInstructions[currentRuleNum].substring(5))
            }
        }
    }
}

console.log('answer is ' + accumulator);
