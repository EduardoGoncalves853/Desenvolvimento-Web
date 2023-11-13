// Factory (Creational Design Pattern)

function person(name, age) {
    return {
        name,
        age: age,
        canDrive: age >= 18,
        status: (age) => {
            if (age <= 18) {
                return alert(` ${name} não pode dirigir`)
            } else {
                return alert(` ${name} pode dirigir`)
            } 
        }
    };
}

console.log(person("Eduardo", 16).status());
console.log(person("Odilon", 17).status());
console.log(person("João Pedro", 18).status());
console.log(person("neemias", 17).status());