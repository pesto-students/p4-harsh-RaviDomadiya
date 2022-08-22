
const Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

const Teacher = function () {};
Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

const him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance"); // Adam is now teaching Inheritance




// =================


// class Person {

//   initialize(name) {
//     this.name = name;
//   }
// }

// class Teacher extends Person {

//   constructor(name, age) {
//     super(name, age);
//   }

//   teach(subject) {
//     console.log('Teacher Name is ' + this.name + ' and now teching ' + subject);
//   }
// }

// var him = new Teacher();
// him.initialize("Adam");
// him.teach("Inheritance");


