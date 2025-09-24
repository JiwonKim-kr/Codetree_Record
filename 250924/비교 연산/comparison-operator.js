const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

evaluater(a >= b);
evaluater(a > b);
evaluater(a <= b);
evaluater(a < b);
evaluater(a == b);
evaluater(a != b);

function evaluater(n) {
    if (n) {
        console.log(`1`);
    } else {
        console.log(`0`);
    }
}