const http = require('http');

const port = 1245;

const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const path = process.argv[2];
      const data = await countStudents(path);
      res.write(data);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.end();
});

app.listen(port, () => {});

module.exports = app;
