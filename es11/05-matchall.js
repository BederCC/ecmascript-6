const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, Apple, and Apple, and Apple, kiwi, and Apple';
for (const match of fruit.matchAll(regex)) {
  console.log(match);
}