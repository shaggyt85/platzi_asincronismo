// example 1
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(5, 2, sum));

//example 2
setTimeout(function () {
    console.log('Hello Mr, Robert Medina');
}, 3000);

function gretting(name) {
    console.log(`Hello Mr, ${name}`);
}

setTimeout(gretting, 3000, 'Robert Medina');