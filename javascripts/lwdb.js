// const dom = require('./dom');

let lwdbKey = '';

const setKey = (key) => {
  lwdbKey = key;
};

const showResults = (searchZip) => {
  searchLWDB(searchZip)
    .then((result) => {
      // dom.domString(result);
    })
    .catch((err) => {
      console.error('search error', err);
    });
};

// http://api.openweathermap.org/data/2.5/weather?q=London&appid=XXXXXX&units=imperial

const searchLWDB = () => {
  return new Promise((resolve, reject) => {
    $.ajax(`http://samples.openweathermap.org/data/2.5/weather?q=London&appid=${lwdbKey}&units=imperial`)
      .done((result) => {
        resolve(result.results);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  showResults,
  setKey,
};
