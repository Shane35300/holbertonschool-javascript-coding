#!/usr/bin/node

const fs = require('fs');

// Récupérer le chemin du fichier depuis le premier argument de la ligne de commande
const filePath = process.argv[2];

// Utiliser fs.readFile pour lire le contenu du fichier de manière asynchrone
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    // Afficher l'erreur si la lecture du fichier a échoué
    console.error(err);
    process.exit(1);
  } else {
    // Afficher le contenu du fichier si la lecture a réussi
    console.log(data);
  }
});
