


const rectangle = [
    {width: 4, height: 5},
    {width: 7, height: 10},
    {width: 14, height: 7},
];

const calculateAreas = rectangle.map((value, index) => {
    return {
        name : `Retângulo ${index + 1}` ,
        area : value.width * value.height
 };

})

console.log(calculateAreas);
console.table(calculateAreas);
document.write(JSON.stringify(calculateAreas));


