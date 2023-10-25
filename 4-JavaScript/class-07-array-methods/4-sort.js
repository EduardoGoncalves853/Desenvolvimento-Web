
// Table ASCII (0-9, A-Z, a-z)
const ArrayNumbers = [2, 3, 4, 5, 6, "7", 8, 40];

const value = ArrayNumbers.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
return 0;
})

console.log(ArrayNumbers.join("-"));
console.log(value.join("-"));

ArrayNumbers.sort((a, b) => a - b)

//? Sort   | o que é? |
//* Um comando usado para organizar números e outras coisas envolvidas

const ArrayNames = ["pedrinho","Èrik","Eduardo", "Luíza"]

ArrayNames.sort((a, b) => a - b)
ArrayNames.sort((a, b) => {
    a = a.toUpperCase();
    b = b.toUpperCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
})

ArrayNames.sort((a, b) => a.localeCompare(b))
ArrayNumbers.sort((a, b) => String(a).localeCompare(b))

console.log(ArrayNames);
console.log(ArrayNumbers);

const arrayAnimes = [
    { name: "Dragon Ball", year: 1984 },
    { name: "Naruto", year: 1997 },
    { name: "Digimon", year: 1997 },
    { name: "Cavaleiros do zodiaco", year: 1986 },
    { name: "Jaspion", year: 1985 },
  ];
  
  const sortedArrayAnimes = arrayAnimes.sort((a, b) => {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    else return 0;
  });
  
  console.table(arrayAnimes.sort((a, b) => a.year - b.year));
  console.table(sortedArrayAnimes);
  
  const sortedArrayAnimesName = arrayAnimes.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    else return 0;
  });
  
  console.table(sortedArrayAnimesName)
  console.table(
    arrayAnimes.sort((a, b) => a.name.localeCompare(b.name))
  );