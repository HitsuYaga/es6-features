var age = 25;
function printHello () {
  console.log('Hello World!')
}

var person = {
  name: 'Hitsu',
  age,
  printHello,
  ['hello' + (age + 2)]: 'Welcome',
  printAge () {
    console.log(this.age);
  }
}

console.log(person.age);
person.printHello();
console.log(person.hello27);
person.printAge();