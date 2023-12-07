//* let count;

//* while (count <= 10) {
//!   console.log(count);
//   count++;
// }

//* for (let count = 0; count <= 10; count++) {
//!   console.log(count);
// }


const myArray = ["A","B","C"];
const arrayBid = [
    ["A","B","C"],
    [1, 2, 3],
]

for(const i of myArray) {
    console.log(i);
}

for (const i of arrayBid) {
    for(const j of i)
    console.log(j);
}

