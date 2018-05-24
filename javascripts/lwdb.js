const dom = require('./dom');

let lwdbKey = '';

const setKey = () => {
lwdbKey = key;
};

const showResults = (searchZip) => {
   searchLWDB(searchZip)
    .then((result) => {
      // dom.domString(result);
    })
    .catch((err) => {
      console.error('search error', err);
    });
};

// const searchLWDB = () => {
//   return new Promise ((resolve, reject) => {
//     $.ajax(`http://samples.openweathermap.org/data/2.5/weather?&api-key=${zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22)
//   })
// }