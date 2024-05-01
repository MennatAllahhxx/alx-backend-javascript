const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

const readDatabase = (path) => new Promise((resolve, reject) => {
  readFileAsync(path, { encoding: 'utf-8' })
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const fieldFirstNames = {};

      lines.slice(1).forEach((line) => {
        const fields = line.split(',');
        const firstName = fields[0];
        const field = fields[3];

        if (fieldFirstNames[field]) {
          fieldFirstNames[field].push(firstName);
        } else {
          fieldFirstNames[field] = [firstName];
        }
      });

      resolve(fieldFirstNames);
    })
    .catch(() => {
      reject(new Error('Cannot load the database'));
    });
});

module.exports = readDatabase;
