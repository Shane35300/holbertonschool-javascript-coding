const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(`./${path}`, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      let nbOfLines = 0;
      let csStudents = 0;
      let sweStudents = 0;
      let csStr = '';
      let sweStr = '';
      const csArray = [];
      const sweArray = [];
      for (const line of lines) {
        if (line !== '') {
          nbOfLines += 1;
          const cuttedLine = line.split(',');
          if (cuttedLine[3] === 'CS') {
            if (csStr !== '') {
              csStr += ', ';
            }
            csStr += cuttedLine[0];
            csArray.push(cuttedLine[0]);
            csStudents += 1;
          }
          if (cuttedLine[3] === 'SWE') {
            if (sweStr !== '') {
              sweStr += ', ';
            }
            sweStr += cuttedLine[0];
            sweArray.push(cuttedLine[0]);
            sweStudents += 1;
          }
        }
      }
      const result = {
        sentence1: `Number of students: ${nbOfLines - 1}`,
        sentence2: `Number of students in CS: ${csStudents}. List: ${csStr}`,
        sentence3: `Number of students in SWE: ${sweStudents}. List: ${sweStr}`,
        csArray,
        sweArray,
      };
      resolve(result);
    });
  });
}
module.exports = readDatabase;
