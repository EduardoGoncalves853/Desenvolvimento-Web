// Velocidade = Distância / Tempo
alert("vamos descobrir a velocidade em km/h");

const Distance = prompt("Distância em km");
const Time = prompt("Tempo em horas");

const Vel = (Distance, Time) => {
  Vel = Distance / Time;
  return Vel;
};

console.log(Vel);