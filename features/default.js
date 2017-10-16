// function sayHello (name='Hitsu') {
//   console.log('Hello ' + name + ' !');
// }

// sayHello();

function greetUser (user = {name: 'Anonymous'}) {
  console.log('Hello ' + user.name + '!');
}

greetUser();
greetUser({name: 'Natsu'});