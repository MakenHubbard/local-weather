let firebaseConfig = {};
let uid = '';

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const setUID = (newUID) => {
  uid = newUID;
};

const saveDayToFavorites = (savedWeather) => {
  savedWeather.uid = uid;
  return new Promise((resolve, reject) => {
    $.ajax({
      method: `POST`,
      url: `${firebaseConfig.databaseURL}/weather.json`,
      data: JSON.stringify(savedWeather),
    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllWeather = () => {
  const allWeatherArray = [];
  return new Promise((resolve, reject) => {
    $.ajax({
      method: `GET`,
      url: `${firebaseConfig.databaseURL}/weather.json`,
    })
      .done((allWeatherObj) => {
        if (allWeatherObj !== null) {
          Object.keys(allWeatherObj).forEach((fbKey) => {
            allWeatherObj[fbKey].id = fbKey;
            allWeatherArray.push(allWeatherObj[fbKey]);
          });
        }
        resolve(allWeatherArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const deleteFavDayFromFirebase = (forecast) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.databaseURL}/weather/${forecast}.json`,
    })
      .done(() => {
        console.log('inside done');
        resolve();
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  setUID,
  saveDayToFavorites,
  getAllWeather,
  deleteFavDayFromFirebase,
};
