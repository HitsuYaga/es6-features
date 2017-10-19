class Person {
  constructor(name) {
    this.name = typeof name === 'string' ? name : 'Anonymous';
  }
  set name (val) {
    this._name = Person.printCapitalizeName(val);
  }
  get name () {
    return this._name;
  }

  printName() {
    console.log(`My name is ${this.name}`);
  }

  static printCapitalizeName(name) {
    return name[0].toUpperCase() + name.slice(1);
  }
}

var person = new Person('hitsu');
console.log(person.name);
person.printName();

console.log(Person.printCapitalizeName('natsu'));