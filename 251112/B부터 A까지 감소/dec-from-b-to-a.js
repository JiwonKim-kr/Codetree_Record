const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = input[0];
let b = input[1];

let text = "";
for(let i=b; i>=a; i--) {
    text += i + " ";
}
console.log(text);
