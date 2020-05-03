var chalk = require('chalk');

function Dog(name){
    this.name = name;
    this.stomach = [];
}

Dog.prototype.eat = function(cat){
    this.stomach.push(cat);
}

Dog.prototype.bark = function(){
    console.log('Gau Gau. My name is '+ chalk.yellow(this.name));
}

module.exports = Dog;