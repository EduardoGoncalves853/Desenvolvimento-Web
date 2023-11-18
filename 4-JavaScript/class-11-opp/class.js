
class Hunter {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.health = 100;
  }
  
  attack() {
    let damage = 1; // valor padrão do dano do ataque
    if (this.level > 5) {
      damage += 4; // adicionar +4 ao dano se o nível for maior que 5
      return console.log(`
      `);
  
    }
    console.log(`!!EFFECTIVE!! ,${this.name} attacked with damage ${damage}!!`);
  }
  
  damage(damage, effective) {
    this.health -= damage;
    this.effective = effective;
  }
}


class Hunter2 {
  constructor(name, level, damage) {
    this.name = name;
    this.level = level;
    this.health = 100;
  }
  
  attack() {
    console.log(`${this.name} attacked!`);
  }
  
  damage(damage2) {
    this.health -= damage2;
  }
}

const Gon = new Hunter("Gon", 10);
const Killua = new Hunter2("Killua", 7);

console.log(Gon);
console.log(Killua);


console.log("__________________________________");

console.log(Gon.name);
console.log(Gon.level);
console.log(Gon.health);

console.log("__________________________________");

console.log(Killua.name);
console.log(Killua.level);
console.log(Killua.health);

console.log("__________________________________");

Killua.attack();
Gon.attack();

console.log("__________________________________");

console.log(Gon.attack);
console.log(Killua.attack);

console.log("__________________________________");

Killua.damage(20);
console.log(Killua.name);
console.log(Killua.health);

console.log("__________________________________");

Gon.damage(1);
console.log(Gon.name);
console.log(Gon.health);

console.log("__________________________________");

const effective = true;
Gon.damage(0, effective);
 // passando 0 como dano, pois o dano já foi tratado no método attack
console.log(Gon.health);