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

class Employee extends Person {
  constructor(name, job) {
    super(name);
    this.job = job
  }

  printGreeting() {
    console.log(`${this.name} is a ${this.job}`)
  }

  callSuperMethod() {
    super.printName();
  }
}

var employee = new Employee('Natsu', 'Developer');
employee.printGreeting();
employee.callSuperMethod();