var mySets = new Set();

mySets.add('Hitsu');
mySets.add('Natsu');
mySets.add('Hitsu');

console.log(mySets.size);

console.log(mySets.has('Hitsu'))

mySets.delete('Natsu')
console.log(mySets.size)