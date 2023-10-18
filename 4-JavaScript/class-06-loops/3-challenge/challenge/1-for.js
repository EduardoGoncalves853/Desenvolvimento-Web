//* let count;

//* while (count <= 10) {
//!   console.log(count);
//   count++;
// }

//* for (let count = 0; count <= 10; count++) {
//!   console.log(count);
// }

// const myArray = ["A", 2, {}, () => {}];
// const ArrayBid = [
//   ["A", "B", "C"],
//   [1, 2, 3],
// ];

// for (let i = 0; i < ArrayBid.length; i++) {
//   for (let j = 2; j < ArrayBid[i].length; j++) {
//     for (let k = 0; k < ArrayBid[i], [j], [j]; k++) {
//       console.log(ArrayBid[i], [j]);
//     }
//   }
//   console.log(ArrayBid[i][j]);
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

