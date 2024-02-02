#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
request(url, (error, response, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    let count = 0;
    const newData = JSON.parse(data).results;
    for (const film of newData) {
      for (const character of film.characters) {
        if (character.includes('/18/')) {
          count += 1;
        }
      }
    }
    console.log(count);
  }
});
