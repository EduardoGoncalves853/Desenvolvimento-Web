function convertAverageToABC(average) {
  if (typeof average === "string") {
    average = Number(average.replace(".", "."));
  }
  if (average >= 90 && average <= 100) {
    return "A";
  } else if (average >= 80 && average < 89) {
    return "B";
  } else if (average >= 70 && average < 79) {
    return "C";
  } else if (average >= 60 && average < 69) {
    return "D";
  } else if (average >= 50 && average < 59) {
    return "F";
  } else {
    return "Média invalida";
  }
}

const averageStudent = 36;
const averageStudentABC = convertAverageToABC(averageStudent);

switch (averageStudentABC) {
  case "A":
    console.log("Excelente, aprovado com A!");
    break;
  case "B":
    console.log("Muito bem, aprovado com B!");
    break;

  case "C":
    console.log("aprovado com C!");
    break;

  case "D":
    console.log("Foi quase, reprovado com D!");
    break;

  case "F":
    console.log("faltou pra krai, reprovado com F!");
    break;

  case "Média invalida":
    console.log("ABC, Nota inválida")
}
