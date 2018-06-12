const lwdb = require('./lwdb');
const firebaseApi = require('./firebaseApi');

const apiKeys = () => {
  return new Promise ((resolve, reject) => {
    $.ajax('../db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  return new Promise ((resolve, reject) => {
    apiKeys()
      .then((results) => {
        lwdb.setKey(results.lwdb.apiKey);
        firebaseApi.setConfig(results.firebase);
        firebase.initializeApp(results.firebase);
        resolve();
      })
      .catch((err) => {
        console.error('no keys:', err);
      });
  });
};

module.exports = {
  retrieveKeys,
};
