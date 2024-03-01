console.warn("Day 8 - Javascript Function")

// Alert built function
// alert("This is message");

// Build function
function greeting(name) {
  return `Hi Programmers, my name is ${name}`;
}
console.log(greeting("Aidil Baihaqi"));

function buildPerson(name, age, occupation) {
  const person = {
    name: name,
    age: age,
    occupation: occupation
  };

  return person;
}
const person = buildPerson("Aidil", 19, "Student");
console.log(person);

function seeGrade(name, score){
  if(score>=90 && score<=100) {
    console.log(`${name} get A grade`);
  }else if(score>=80 && score<=90) {
    console.log(`${name} get B grade`);
  }else{
    console.log(`${name} get C grade`);
  }
}

seeGrade("Mas Aidil", 78)

// OOP
// Object Functions for OOP Javascript
const people = {
  name: "Oktaviandra",
  age: 19, 
  occupation: "Student",

  // Method for displaying names
  sayName() {
    console.log(this.name);
  }
}
people.sayName();

// Instance and Constructor
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName(){
    console.log(this.name)
  }
}
const fia = new Person("Fia", 18); 
fia.sayName();

// Simple Authentication
class User {
  constructor(name, email, role) {
    this.name = name,
    this.email = email,
    this.role = role
  }

  isAdmin() {
    return this.role === "admin";
  }
}

const user = new User("Ganda", "ganda@example.com", "admin");

if(user.isAdmin()) {
  console.log("User is admin");
}else {
  console.log("User is not admin");
}
