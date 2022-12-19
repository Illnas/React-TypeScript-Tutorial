
let name: string;
let anyName: any; //not recommended
let age: number;
let ageUnion: number | string;
let isStudent: boolean;
let hobbies: string[];
let role:[number, string] // one number, one string === duple

type Person = {
  name: string;
  age?: number; //age is optional
}

//first way of defining objects
let person:Object //not recommended, object can have numerous properties


//second way of defining objects with type
let correctPerson: Person = {
  name: "Nada",
  age: 28
}


let lotsOfPeople: Person[]; //array with object Person

//declare a function type
let printNames: Function

//better way to declare a function
let printNamesBetter: (name: string) => void; //return type is void

//void returns undefined, never does not return anything


//define function
function printName(name: string) {
  console.log(name)
}


let personName: unknown //instead of any use unknown

interface PersonInterface { // use extends X to have type X properties 
  name: string;
  age?: number;
}

interface Guy extends PersonInterface {
  profession: string;
}

type X = PersonInterface & { // type X extends interface PersonInterface
  a: string;
  b: number
}

type Y = X & {  //Y is extending X type, and has its properties
  c: string;
  d: number
}

let y: Y = {   //needs to contain a and b from Type X, and c, d from Y
  name: "Nada",
  age: 23,
  a: "sdad",
  b: 2,
  c: "dadaw",
  d: 3
}



export {}