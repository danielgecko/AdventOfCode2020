const fs = require('fs');

const entries = fs.readFileSync('input.txt')
                  .toString()
                  .split('\n')
                  .map(s => s.replace(/\r$/, ''))
                  .filter(s => s.length > 0);

entries.forEach((entry1, index) => {
    let sum = 0;

    for(i=index+1; i<entries.length; i++){
        let entry2 = entries[i];
        sum = parseInt(entry1) + parseInt(entry2);
        if(sum == 2020){
            let solution = entry1 * entry2;
            console.log(solution);
            break;
        }
    }

});
