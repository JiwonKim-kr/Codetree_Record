const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let n = input;
let text = "";
for(let i=1; i<6; i++) {
    text += n*i + " ";
}
console.log(text);
