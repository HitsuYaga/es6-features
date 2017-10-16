function greetUser (user = {name: 'Anonymous', age: 0}) {
  console.log(`Hello ${user.name}!
  You are ${user.age}.`);
}

greetUser();
greetUser({name: 'Hitsu', age: 28});