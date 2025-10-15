const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
let score = parseInt(input);

let grade = ["A", "B", "C", "D", "F"];

for(let i = 0; i<5; i++) {
    if(score >= (90 - i*10)) {
        console.log(grade[i]);
        break;
    }
}
//if(score < 60) console.log(grade[4]);