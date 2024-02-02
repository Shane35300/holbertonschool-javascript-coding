#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
request.get(url, (error, response, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const dico = {};
    const newData = JSON.parse(data);

    for (let i = 0; i < newData.length; i += 1) {
      const { userId } = newData[i];
      if (!(userId in dico)) {
        dico[userId] = 0;
      }
      if (newData[i].completed) {
        dico[userId] += 1;
      }
    }
    for (const key in dico) {
      if (Object.prototype.hasOwnProperty.call(dico, key)) {
        const value = dico[key];
        if (value === 0) {
          delete dico[key];
        }
      }
    }
    console.log(dico);
  }
});
