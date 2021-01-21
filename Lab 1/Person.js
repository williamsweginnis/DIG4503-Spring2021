const chalk = require("chalk");
class Person {
    constructor(name, color) {
        this.name = name;
        this.favcolor = color;
    }

    speak() {
        console.log(chalk.hex(this.favcolor)(this.name));
    }
  }

module.exports = Person;