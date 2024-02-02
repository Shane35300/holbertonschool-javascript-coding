const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(`./${path}`, 'utf8');
    // Diviser les lignes du fichier
    const lines = data.trim().split('\n');
    let nbOfLines = 0;
    let csStudents = 0;
    let sweStudents = 0;
    let csStr = '';
    let sweStr = '';
    for (const line of lines) {
      if (line !== '') {
        nbOfLines += 1;
        const cuttedLine = line.split(',');
        if (cuttedLine[3] === 'CS') {
          if (csStr !== '') {
            csStr += ', ';
          }
          csStr += cuttedLine[0];
          csStudents += 1;
        }
        if (cuttedLine[3] === 'SWE') {
          if (sweStr !== '') {
            sweStr += ', ';
          }
          sweStr += cuttedLine[0];
          sweStudents += 1;
        }
      }
    }
    console.log(`Number of students: ${nbOfLines - 1}`);
    console.log(`Number of students in CS: ${csStudents}. List: ${csStr}`);
    console.log(`Number of students in SWE: ${sweStudents}. List: ${sweStr}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
