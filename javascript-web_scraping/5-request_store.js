#!/usr/bin/node

const fs = require('fs');
const request = require('request');

if (process.argv.length !== 4) {
  console.error('Usage: node 5-request_store.js <url> <file>');
  process.exit(1); // Quitter le script avec un code d'erreur
}
const file = process.argv[3];
const url = process.argv[2];
request.get(url, (error, response, data) => {
  if (error) {
    console.error(error);
  } else {
    fs.writeFile(file, data, 'utf8', (err) => {
      if (err) {
        // Afficher l'erreur si la lecture du fichier a échoué
        console.error(err);
      }
    });
  }
});
