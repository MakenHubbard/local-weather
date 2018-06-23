const lwdb = require('./lwdb');
const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

const Links = () => {
  $(document).click((e) => {
    if (e.target.id === 'viewSavedBtn') {
      $('#theSearchPart').addClass('hide');
      $('#weatherReportDiv').addClass('hide');
      $('#registration-form').addClass('hide');
      $('#authScreen').addClass('hide');
      $('#myWeather').removeClass('hide');
    } else if (e.target.id === 'login') {
      $('#theSearchPart').addClass('hide');
      $('#weatherReportDiv').addClass('hide');
      $('#registration-form').addClass('hide');
      $('#authScreen').removeClass('hide');
      $('#myWeather').addClass('hide');
    } else if (e.target.id === 'typeInZip') {
      $('#theSearchPart').removeClass('hide');
      $('#weatherReportDiv').removeClass('hide');
      $('#registration-form').addClass('hide');
      $('#authScreen').addClass('hide');
      $('#myWeather').addClass('hide');
    } else if (e.target.id === 'register-link') {
      $('#theSearchPart').addClass('hide');
      $('#weatherReportDiv').addClass('hide');
      $('#registration-form').removeClass('hide');
      $('#authScreen').addClass('hide');
      $('#myWeather').addClass('hide');
    }
  });
};

const searchZip = () => {
  $('#zipCode').click((e) => {
    const userInput = $('#userZip').val();
    lwdb.showOneDay(userInput, 1);
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
      barometric: addedToFavs.find('.bP').data().bP,
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

const letMeSeeMyFavs = () => {
  $(document).on('click', '#viewSavedBtn', (e) => {
    getAllSavedDataEvent();
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

const deleteFavoriteDaysEvent = () => {
  $(document).on('click', '#removeFromFavs', (e) => {
    const dayToDelete = $(e.target).closest('.forecasts').data('firebaseId');
    firebaseApi.deleteFavDayFromFirebase(dayToDelete)
      .then(() => {
        getAllSavedDataEvent();
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

const initializer = () => {
  searchZip();
  saveEvent();
  Links();
  getAllSavedDataEvent();
  letMeSeeMyFavs();
  deleteFavoriteDaysEvent();
};

module.exports = {
  initializer,
};
