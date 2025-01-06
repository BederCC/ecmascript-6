const regex = /(\d{4})-(\d{2})-(\d{2})/;
const match = regex.exec('2018-04-30');
console.log(match[0]); // 2018-04-30

console.table(match);