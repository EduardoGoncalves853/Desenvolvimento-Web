//todo ................................

//* Pirâmide (Volume) 

var aPirâmide = prompt("coloque a aresta da base da pirâmide: ");

var hPirâmide = prompt("coloque a altura da pirâmide: ");

var VolumePi = (aPirâmide * aPirâmide * hPirâmide) / 3;

//todo ................................

//* Cilindro (Volume) 

var rC = prompt("coloque o raio do cilindro: ");

var hC = prompt("coloque a altura do cilindro: ");

var VolumeC = (3,1415 * (rC * rC) * hC);
//todo ................................

//* Cone (Volume)

var rCo = prompt("coloque o raio do cone: ");

var hCo = prompt("coloque a altura do cone: ");

var VolumeCo = (3.1415 * (rCo * rCo) * hCo) / 3;

//todo ................................

//* Prisma de base quadrangular (Volume)

var aPrisma = prompt("coloque a aresta da base do prisma: ");

var hPrisma = prompt("coloque a altura do prisma: ");

var VolumePq = (aPrisma * aPrisma * hPrisma);

//todo ................................

// Prisma de base triangular (Volume)

var aTprisma = prompt("coloque a aresta da base do prisma: ");

var hTprisma = prompt("coloque a altura do prisma: ");

var VolumetP = (aTprisma * aTprisma * hTprisma)

//todo ................................

//* Mostrar Resultados em alert

// Pirâmide 
alert(`O volume da pirâmide em cm³ é : ${VolumePi}`);

// Cilindro cilindro
alert(`O volume do cilindro em cm³ é : ${VolumeC}`);

// Cone
alert(`O volume do cone em cm³ é : ${VolumeCo}`);

// Prisma / Quadangular
alert(`O volume do prisma de base quadrangular em cm³ é : ${VolumePq}`);

// Prisma / Triangular
alert(`O volume do prisma de base triangular em cm3 é : ${VolumetP}`);