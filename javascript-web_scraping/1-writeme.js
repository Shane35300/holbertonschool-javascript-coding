#!/usr/bin/node

const fs = require('fs');
// Vérifier si le nombre d'arguments est correct
if (process.argv.length !== 4) {
  console.error('Usage: node ./1-writeme.js <file-path> <text>');
  process.exit(1); // Quitter le script avec un code d'erreur
}

const filePath = process.argv[2];
const text = process.argv[3];

// Utiliser fs.writeFile pour écrire un text dans un fichier
fs.writeFile(filePath, text, 'utf8', (err) => {
  if (err) {
    // Afficher l'erreur si la lecture du fichier a échoué
    console.error(err);
  }
});
