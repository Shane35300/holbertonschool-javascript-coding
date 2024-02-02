const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const db = process.argv[2];

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  const m1 = 'This is the list of our students';
  countStudents(db)
    .then((result) => {
      const m2 = result.sentence1;
      const m3 = result.sentence2;
      const m4 = result.sentence3;
      const mess = `${m1}\n${m2}\n${m3}\n${m4}`;
      res.type('text/plain').send(mess);
    })
    .catch((error) => {
      const mess = `${m1}\n${error.message}`;
      res.type('text/plain').send(mess);
    });
});
app.listen(1245);
module.exports = app;
