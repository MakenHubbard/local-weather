const lwdb = require('./lwdb');
const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

const Links = () => {
  $(document).click((e) => {
    if (e.target.id === 'viewSavedBtn') {
      $('#typeInZip').addClass('hide');
      $('#weatherReportDiv').addClass('hide');
      $('#authScreen').addClass('hide');
      $('#savedDays').removeClass('hide');
    } else if (e.target.id === 'login') {
      $('#typeInZip').addClass('hide');
      $('#weatherReportDiv').addClass('hide');
      $('#authScreen').removeClass('hide');
      $('#savedDays').addClass('hide');
    } else if (e.target.id === 'typeInZip') {
      $('#typeInZip').removeClass('hide');
      $('#weatherReportDiv').removeClass('hide');
      $('#authScreen').addClass('hide');
      $('#savedDays').addClass('hide');
    }
  });
};

const searchZip = () => {
  $('#zipCode').click((e) => {
    const userInput = $('#userZip').val();
    lwdb.showOneDay(userInput, 1);
    console.error(userInput);
  });
  $(document).keypress((e) => {
    const userInput = $('#userZip').val();
    if (e.key === 'Enter') {
      lwdb.showOneDay(userInput, 1);
    };
  });
  $(document).on('click', '#5-days-btn', (e) => {
    const userInput = $('#userZip').val();
    lwdb.showOneDay(userInput, 5);
  });
};

const saveEvent = () => {
  $(document).on('click', '#saveLink', (e) => {
    const addedToFavs = $(e.target).closest('.forecasts');
    const favForecast = {
      date: addedToFavs.find('.date').data().date,
      temp: addedToFavs.find('.temp').data().temp,
      conditions: addedToFavs.find('.condition').data().condition,
      icon: addedToFavs.find('.condImage').data().condImage,
      humidity: addedToFavs.find('.humid').data().humid,
      barometric: addedToFavs.find('.bp').data().bp,
      windSpeed: addedToFavs.find('.blowPower').data().blowPower,
    };
    firebaseApi.saveDayToFavorites(favForecast)
      .then(() => {
        addedToFavs.remove();
      })
      .catch((error) => {
        console.error('error in saving favorite day', error);
      });
  });
};

const getAllSavedDataEvent = () => {
  firebaseApi.getAllWeather()
    .then((weatherArray) => {
      weatherArray.forEach((weather) => {
        dom.savedWeatherDomBuilder(weatherArray);
      });
    });
};

const initializer = () => {
  searchZip();
  saveEvent();
  Links();
  getAllSavedDataEvent();
};

module.exports = {
  initializer,
};
