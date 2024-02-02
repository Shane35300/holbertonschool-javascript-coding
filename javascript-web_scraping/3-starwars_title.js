#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 3-starwars_title.js <number>');
  process.exit(1); // Quitter le script avec un code d'erreur
}

const number = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${number}`;
request.get(url, (error, response, data) => {
  if (error) {
    console.error(error);
  } else {
    const newData = JSON.parse(data);
    console.log(newData.title);
  }
});
