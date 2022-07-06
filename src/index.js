import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

class Car {
constructor (marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
}
park() {
  console.log("Este "+this.modelo + " is parked")
}
drive() {
  console.log("Este "+ this.modelo + " is being drived")
}
static nazi() {
  console.log ("Ache");
}
}

let audia1 = new Car("audi", "a1", 2001);

console.log(audia1.park());
console.log(audia1.drive());
Car.nazi();

class Camión extends Car {
  driveCamión(){
    this.drive();
  }
}

let mb200 = new Camión("Mercedez", "c200");
console.log(mb200.driveCamión());

class Person {
  constructor (name, edad) {
    this.name = name;
    this.edad = edad;
  }
  saludar() {
    console.log("Hola, mi nombre es " + this.name + " y tengo " + this.edad + " años")
  }
}

let pedro = new Person ("Pedro", 20);
console.log(pedro.saludar());

class Desarrollador extends Person {
  constructor (name, edad, tipo) {
    super (name, edad);
    this.tipo = tipo;
  }
  saludoDesarrollador() {
    console.log("Hola, soy " + this.name + " y soy desarrollador " + this.tipo);
  }
  }

  let pedroDev = new Desarrollador("Pedro", 20, "solidity");
  console.log(pedroDev.saludoDesarrollador())