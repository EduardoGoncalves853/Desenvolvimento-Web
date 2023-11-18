class Animal {
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
}


class Dog extends Animal{
constructor(name, race) {
    super(name);
    this.race = race;
}
}

const dog = new Dog("Spike","DobberMan");
const animal = new Animal("Spike", 14 );

console.log(Animal.name);
console.log(dog.name);
