const path = require('path');
const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path.join(__dirname, '../../database.csv'))
      .then((data) => {
        const result = `${data.sentence0}\n${data.sentence2}\n${data.sentence3}`;
        response.status(200).send(result);
      })
      .catch(() => {
        response.status(500).send({ error: 'Cannot load the database' });
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params; // Récupérer le paramètre 'major' de la requête
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE'); // Envoyer une réponse avec le statut 500 et le message d'erreur
      return;
    }
    readDatabase(path.join(__dirname, '../../database.csv'))
      .then((data) => {
        console.log(path);
        const studentsInMajor = major === 'CS' ? data.csArray : data.sweArray;
        response.status(200).send(`List: ${studentsInMajor.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send({ error: 'Cannot load the database' }); // Envoyer une réponse avec le statut 500 et le message d'erreur
      });
  }
}
module.exports = StudentsController;
