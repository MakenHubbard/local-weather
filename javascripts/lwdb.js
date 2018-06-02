const dom = require('./dom');

let lwdbKey = '';

const setKey = (key) => {
  lwdbKey = key;
};

const showOneDay = (searchZip, days) => {
  searchOneDay(searchZip, days)
    .then((result) => {
      dom.domString(result, days);
    })
    .catch((err) => {
      console.error('search error', err);
    });
};

// const showFiveDay = (searchZip) => {
//   searchFiveDay(searchZip)
//     .then((result) => {
//       return result;
//       // dom.damStrung(result);
//     })
//     .catch((err) => {
//       console.error('five day search error', err);
//     });
// };

const searchOneDay = (userInput, days) => {
  if (days === 1) {
    return new Promise((resolve, reject) => {
      $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${userInput},us&appid=${lwdbKey}&units=imperial`)
        .done((result) => {
          console.error(result);
          resolve(result);
        })
        .fail((err) => {
          reject(err);
        });
    });
  } else if (days !== 1) {
    return new Promise((resolve, reject) => {
      $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${userInput}&appid=${lwdbKey}&units=imperial`)
        .done((result) => {
          console.error(result);
          resolve(result);
        })
        .fail((err) => {
          reject(err);
        });
    });
  };
};

// const searchFiveDay = (userInput) => {
//   return new Promise((resolve, reject) => {
//     $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${userInput}&appid=${lwdbKey}`)
//       .done((result) => {
//         console.error(result);
//         resolve(result);
//       })
//       .fail((err) => {
//         reject(err);
//       });
//     console.error('inside the api call', userInput);
//     console.error('inside the api call', lwdbKey);
//   });
// };

module.exports = {
  showOneDay,
  setKey,
};
