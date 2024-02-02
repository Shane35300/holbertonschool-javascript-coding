#!/usr/bin/node

const request = require('request');

const ville = process.argv[2];
const apiUrl = `https://geo.api.gouv.fr/communes?nom=${ville}&fields=departement&boost=population&limit=5`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Erreur lors de la requête API:', error);
  } else {
    const data = JSON.parse(body)
    // Traitement des données de réponse
    console.log(data);
  }
});
