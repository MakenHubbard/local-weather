const lwdb = require('./lwdb');
const firebaseApi = require('./firebaseApi');
const dom = require('./dom');
const authState = require('./auth');

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
      console.log('test');
      $('#weatherReportDiv').addClass('hide');
      $('#registration-form').removeClass('hide');
      $('#authScreen').addClass('hide');
      $('#myWeather').addClass('hide');
    } else if (e.target.id === 'signIn-btn') {

      $('#theSearchPart').removeClass('hide');
      $('#weatherReportDiv').addClass('hide');
      $('#registration-form').addClass('hide');
      $('#authScreen').addClass('hide');
      $('#myWeather').removeClass('hide');
    } else if (e.target.id === 'logout') {
      $('#theSearchPart').addClass('hide');
      $('#weatherReportDiv').addClass('hide');
      $('#registration-form').addClass('hide');
      $('#authScreen').removeClass('hide');
      $('#myWeather').addClass('hide');
    }
  });
};

const searchZip = () => {
  $('#zipCode').click(() => {
    const userInput = $('#userZip').val();
    lwdb.showOneDay(userInput, 1);
  });
  $(document).keypress((e) => {
    const userInput = $('#userZip').val();
    if (e.key === 'Enter') {
      lwdb.showOneDay(userInput, 1);
    };
  });
  $(document).on('click', '#5-days-btn', () => {
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

const letMeSeeMyFavs = () => {
  $(document).on('click', '#viewSavedBtn', () => {
    getAllSavedDataEvent();
  });
};

const getAllSavedDataEvent = () => {
  firebaseApi.getAllWeather()
    .then((weatherArray) => {
      dom.savedWeatherDomBuilder(weatherArray);
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

const authEvents = () => {
  $('#signIn-btn').click((e) => {
    e.preventDefault();
    const email = $('#inputEmail').val();
    const pass = $('#inputPassword').val();
    firebase.auth().signInWithEmailAndPassword(email, pass)
      .catch((error) => {
        $('#signin-error-msg').text(error.message);
        $('#signin-error').removeClass('hide');
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  });

  $('#register-btn').click(() => {
    const email = $('#registerEmail').val();
    const pass = $('#registerPassword').val();
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch((error) => {
      $('#register-error-msg').text(error.message);
      $('#register-error').removeClass('hide');
      console.error(error.message);
    });
  });

  $('#register-link').click(() => {
    $('#login-form').addClass('hide');
    $('#registration-form').removeClass('hide');
  });

  $('#signIn-link').click(() => {
    $('#login-form').removeClass('hide');
    $('#registration-form').addClass('hide');
  });

  $('#logout').click((e) => {
    console.log('test');
    e.preventDefault();
    firebase.auth().signOut()
      .then(() => {

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
  authEvents();
  authState.checkLoginInStatus();
};

module.exports = {
  initializer,
};
