// const dom = require('./dom');

let lwdbKey = '';

const setKey = (key) => {
  lwdbKey = key;
};

const showResults = (searchZip) => {
  searchLWDB(searchZip)
    .then((result) => {
      return result;
      // dom.domString(result);
    })
    .catch((err) => {
      console.error('search error', err);
    });
};

const searchLWDB = (userInput) => {
  return new Promise((resolve, reject) => {
    $.ajax(`http://samples.openweathermap.org/data/2.5/weather?zip=${userInput},us&appid=${lwdbKey}&units=imperial`)
      .done((result) => {
        resolve(result.results);
      })
      .fail((err) => {
        reject(err);
      });
    console.error('inside the api call', userInput);
  });
};

module.exports = {
  showResults,
  setKey,
};
