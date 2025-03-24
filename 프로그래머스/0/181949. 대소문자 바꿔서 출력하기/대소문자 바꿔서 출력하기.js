const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    arr = [];
    newStr = [...str].map((char,idx) => {
        char === char.toUpperCase() ? arr.push(char.toLowerCase()) : arr.push(char.toUpperCase());
    });
    output = arr.join('');
    console.log(output);
});