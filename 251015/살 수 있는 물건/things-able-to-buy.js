const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
let money = parseInt(input);

let a = {
    name : "book",
    value : 3000
};

let b = {
    name : "mask",
    value : 1000
};

if (money >= a.value) {
    console.log(a.name);
} else if (money >= b.value) {
    console.log(b.name);
} else {console.log("no");}
