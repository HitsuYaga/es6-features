function addTotal (...grades) {
  var total = 0;
  for (let grade of grades) {
    total += grade;
  }
  return total;
}

var average = addTotal(1,3 ,5 ,7, 9);
console.log(average);