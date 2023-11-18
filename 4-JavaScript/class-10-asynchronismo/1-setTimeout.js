console.log("Antes");
setTimeout(() => {
    console.log("1");
}, 1000);

setTimeout(() => {
    console.log("2");
}, 2000);

setTimeout(() => {
    console.log("3");
}, 3000);

setTimeout(() => {
    console.log("4");
}, 4000);

setTimeout(() => {
    console.log("5");
}, 5000);

setTimeout(() => {
    console.log("6");
}, 6000);

setTimeout(() => {
    console.log("7");
}, 7000);

setTimeout(() => {
    console.log("8");
}, 8000);

setTimeout(() => {
    console.log("9");
}, 9000);

setTimeout (() => {
    console.log("10");
}, 10000);

const timeout = setTimeout (() => {
    console.log("11");
}, 11000);


console.log(Depois);

if (count === 10) {
    clearInterval(setTimeout)
};

let count = 0;
setInterval(() => {
    console.log(`setInterval ${count}`);
count++;
}, 10000);

console.log(setTimer);
clearInterval(setTimer)