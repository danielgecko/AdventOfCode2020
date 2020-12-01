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

        for(j=i+1; j<entries.length; j++){
            let entry3 = entries[j];

            sum = parseInt(entry1) + parseInt(entry2) + parseInt(entry3);
            if(sum == 2020){
                let solution = entry1 * entry2 * entry3;
                console.log(solution);
                break;
            }
        }

    }

});
