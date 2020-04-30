function Cat(){
    this.stomach =[];
}

Cat.prototype.eat = function(){
    this.stomach.push(Mouse);
}

module.exports = Cat;