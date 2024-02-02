#!/usr/bin/node

const request = require('request');

// Récupérer le chemin du fichier depuis le premier argument de la ligne de commande
const url = process.argv[2];

request(url, (error, response) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log('code:', response.statusCode);
  }
});
