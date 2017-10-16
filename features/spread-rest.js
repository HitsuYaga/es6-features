// function add (a, b) {
//   return a + b;
// }

// var number = [2, 10];
// console.log(add(...number));

// var a = [2, 10];
// var b = [4, 22];
// var undefine = [0, ...a, ...b, 30];
// undefine.push(...[24, 56]);
// console.log(undefine);

// function greetUsers (group, ...names) {
//   names.forEach((name) => {
//     console.log(`Hello ${name}. You're part of ${group}`);
//   })
// }

// greetUsers('Developers', 'Hitsu', 'Natsu', 'Yuki');

function addEachVariables (...numbers) {
  var num_tmp = 0
  numbers.forEach((number) => {
    total = num_tmp + number;
    num_tmp = total;
    console.log(total);
  });
}

addEachVariables(3, 6, 9);