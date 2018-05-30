const lwdb = require('./lwdb');

const searchZip = () => {
  $('#zipCode').click((e) => {
    const userInput = $('#userZip').val();
    lwdb.showOneDay(userInput);
    console.error(userInput);
  });
  $(document).keypress((e) => {
    const userInput = $('#userZip').val();
    if (e.key === 'Enter') {
      lwdb.showOneDay(userInput);
    };
  });
};

const initializer = () => {
  searchZip();
};

module.exports = {
  initializer,
};
