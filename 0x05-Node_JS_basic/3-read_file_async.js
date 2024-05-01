const fs = require('fs');

const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

const countStudents = (path) => new Promise((res, rej) => {
  readFileAsync(path, { encoding: 'utf-8' }).then((data) => {
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const numStudents = lines.length - 1;

    console.log(`Number of students: ${numStudents}`);

    const fieldCounts = {};

    lines.slice(1).forEach((line) => {
      const fields = line.split(',');
      const field = fields[3];
      if (fieldCounts[field]) {
        fieldCounts[field].push(fields[0]);
      } else {
        fieldCounts[field] = [fields[0]];
      }
    });

    for (const field in fieldCounts) {
      if (field) {
        const count = fieldCounts[field].length;
        const list = fieldCounts[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    }
    res();
  }).catch(() => {
    rej(new Error('Cannot load the database'));
  });
});

module.exports = countStudents;
