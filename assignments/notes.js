function add(num1, num2) {
  return num1 + num2;
}

// console.log(add(2, 2));

//function expression - anonymous funtion, has no name - the variable has a name

let multiply = function(num1, num2) {
  return num1 * num2;
};

// console.log(multiply(2, 5));

//arrow syntax (of function expressions)

let subtract = (num1, num2) => {
  return num1 - num2;
};

//or

let divide = (num1, num2) => num1 / num2;

// console.log(subtract(1, 1));

//Immediately invoked function expression (an ife - iffy)

let talk = (function() {
  return "I was immediately invoked";
})();

// console.log(talk);

//Variables

// Type      Scope      Duplicates      Updates
// var       function    yes             yes
// let       block {}    no              yes
// const     block {}    no              no

// Best Practice: Use const untill you cannot

// Object Literals

const objName = {
  name: "value"
};

// console.log(objName);

const person = {
  name: "Jane",
  age: 25,
  location: "United State",
  school: "Lambda School"
};

// console.log(person);

//Access properties with dot notation
// console.log(person.name);
// console.log(person.age);

//Access properties with bracket notation - ideal if you have to deal with white space or special characters
// console.log(person["location"]);
// console.log(person["school"]);

// Object Methods

const student = {
  name: "Jane",
  age: 25,
  location: "United State",
  school: "Lambda School",
  study: function(topic) {
    console.log(`${this.name} likes to study ${topic}`);
  }
};

// student.study("code");

const me = {
  firstName: "Jason",
  lastName: "Loomis",
  age: 39,
  homeTown: "Wayne",
  favoriteColor: "Blue"
};

// console.log(me);
console.log(Object.values(me));
console.log(Object.keys(me));
console.log(Object.entries(me));
