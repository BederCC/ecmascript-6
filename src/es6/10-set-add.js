const list = new Set();
list.add('item1');
list.add('item2').add('item3');
list.add('item4'); // Duplicate value
console.log(list); // Set { 'item1', 'item2', 'item3' }