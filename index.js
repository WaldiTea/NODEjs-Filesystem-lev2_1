const data = require('./data.json');
const fs = require('fs');

const stringParts = data.map((e) => {
  return e.id + ' - ' + e.title + '\n' + e.description;
});

console.log(stringParts.join('\n\n'));

const outputString = stringParts.join('\n\n');

fs.writeFile('string.txt', outputString, () => {
  return;
});