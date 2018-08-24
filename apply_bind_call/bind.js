const Person = function(name) {
  this.name = name;
};

Person.prototype.sayName = function() {
  console.log(`My name is ${this.name}`);
}

const john = new Person('John');
// const name = john.sayName; // not bound to Person object
const getPersonName = john.sayName.bind(john); // bind sayName back to Person object

getPersonName();
