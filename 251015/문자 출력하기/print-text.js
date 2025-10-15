const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let text = "";

for(let i=0; i<8; i++) text += input;

console.log(text);