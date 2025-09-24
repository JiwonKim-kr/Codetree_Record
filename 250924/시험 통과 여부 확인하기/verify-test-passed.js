const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

console.log(input >= 80 ? `pass` : 80-input + " more score");