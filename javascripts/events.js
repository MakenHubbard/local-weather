const lwdb = require('./lwdb');

const searchZip = () => {

  $('#zipCode').click((e) => {
    const userInput = $('#userZip').val();
    lwdb.showOneDay(userInput,1);
    console.error(userInput);
  });
  $(document).keypress((e) => {
    const userInput = $('#userZip').val();
    if (e.key === 'Enter') {
      lwdb.showOneDay(userInput,1);
    };
  });
  $(document).on('click','#5-days-btn', (e) => {
    const userInput = $('#userZip').val();
    lwdb.showOneDay(userInput,5);
  });
};

const initializer = () => {
  searchZip();
};

module.exports = {
  initializer,
};
