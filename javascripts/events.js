const lwdb = require('./lwdb');

const searchZip = () => {
  $('#zipCode').click((e) => {
    const userInput = $('#userZip').val();
    lwdb.showOneDay(userInput);
    console.error(userInput);
  });
};

const initializer = () => {
  searchZip();
};

module.exports = {
  initializer,
};
