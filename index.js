var Dog = require('./Dog');
var Cat = require('./Cat');

var dog = new Dog('James');
var tom = new Cat('Tom');
dog.eat(tom);
console.log(dog);