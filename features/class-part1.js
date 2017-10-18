class Person {
  constructor(name) {
    this.name = typeof name === 'string' ? name : 'Anonymous';
  }

  printName() {
    console.log(`My name is ${this.name}`);
  }

  static printCapitalizeName(name) {
    return name[0].toUpperCase() + name.slice(1);
  }
}

var person = new Person('Hitsu');
console.log(person.name);
person.printName();

console.log(Person.printCapitalizeName('natsu'));