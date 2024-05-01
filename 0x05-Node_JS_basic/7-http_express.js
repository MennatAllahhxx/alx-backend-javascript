const express = require('express');

const app = express();

const port = 1245;

const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const path = process.argv[2];
  try {
    const data = await countStudents(path);
    res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    res.send(`${error.message}`);
  }
});

app.listen(port, () => {});

module.exports = app;
