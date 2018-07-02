let uid = '';

const getUid = () => {
  return uid;
};

const setUid = () => {
  uid = newUid;
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

const checkLoginInStatus = () => {
  firebas.auth().onAuthStateChanged((user) => {
    if(user) {
      setUid(user.uid);
      $('#theSearchPart').removeClass('hide');
      $('#weatherReportDiv').removeClass('hide');
      $('#registration-form').addClass('hide');
      $('#authScreen').addClass('hide');
      $('#myWeather').addClass('hide');
    } else {
      $('#theSearchPart').addClass('hide');
      $('#weatherReportDiv').addClass('hide');
      $('#registration-form').addClass('hide');
      $('#authScreen').removeClass('hide');
      $('#myWeather').addClass('hide');
    }
  });
};

const initializer = () => {
  authEvents();
  checkLoginInStatus();
};

module.exports = {
  initializer,
};
