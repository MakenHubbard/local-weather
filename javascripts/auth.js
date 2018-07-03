
const { setUID, } = require('./firebaseApi');

const checkLoginInStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUID(user.uid);
      console.log('sign in');
      $('#theSearchPart').removeClass('hide');
      $('#weatherReportDiv').removeClass('hide');
      $('#registration-form').addClass('hide');
      $('#authScreen').addClass('hide');
      $('#myWeather').removeClass('hide');
    } else {
      $('#theSearchPart').addClass('hide');
      $('#weatherReportDiv').addClass('hide');
      $('#registration-form').addClass('hide');
      console.log('sign out');
      $('#authScreen').removeClass('hide');
      $('#myWeather').addClass('hide');
    }
  });
};

module.exports = {
  checkLoginInStatus,
};
