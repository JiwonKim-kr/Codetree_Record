const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let aScore = input[0].split(' ').map(Number);
let aMath = aScore[0];
let aEng = aScore[1];

let bScore = input[1].split(' ').map(Number);
let bMath = bScore[0];
let bEng = bScore[1];


if (aMath > bMath && aEng > bEng) console.log("1");
else console.log("0");
