let firebaseConfig = {};

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const saveDayToFavorites = (newWeather) => {
  return new Promise((resolve, rejcet) => {
    $.ajax({
      method: `POST`,
      url: `${firebaseConfig.databaseURL}/weather.json`,
      data: JSON.stringify(newWeather),
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
  return new Promise((resolve, reject) => {
    const allWeatherArray = [];
    $.ajax({
      method: `GET`,
      url: `${firebaseConfig.databaseURL}/weather.json`,
    })
      .done((allWeatherObj) => {
        if (allWeatherObj !== null) {
          Object.keys(allWeatherObj).forEach((fbKey) =>{
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

module.exports = {
 setConfig,
 saveDayToFavorites,
 getAllWeather,
};
