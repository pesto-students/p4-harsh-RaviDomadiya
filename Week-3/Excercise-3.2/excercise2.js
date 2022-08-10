const person = {
  name : "Ravi",
  lname : "Domadiya"
};

function greet(text){
  console.log(text, this.name);
}

//bind

let hi = greet.bind(person);
hi("hi");

//call

greet.call(person,'hello');

//apply

greet.apply(person,["Good Morning"]);//value pass in array
