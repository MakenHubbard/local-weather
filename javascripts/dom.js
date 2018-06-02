const moment = require('../lib/node_modules/moment');

const domString = (results, day) => {
  let strung = '';
  if (day === 1) {
    strung += `<div class="row">`;
    strung += `<div class="col-sm-6 col-md-6">`;
    strung += `<div class="thumbnail">`;
    strung += `<h1 align="center">${moment().format('<b>dddd</b> </br> MMMM Do, YYYY')}</h1>`;
    strung += `<div class="caption">`;
    strung += `<p align="center">Average Temperature: <b>${Math.ceil(results.main.temp)} F</p>`;
    strung += `<p><strong>Conditions:</strong> ${results.weather[0].description} <img src="http://openweathermap.org/img/w/${results.weather[0].icon}.png"> </p>`;
    strung += `<ul type="circle">`;
    strung += `<li>Humidity: ${results.main.humidity}%</li>`;
    strung += `<li>Barometric Pressure: ${results.main.pressure} hPa</li>`;
    strung += `<li>Temp. High: ${Math.ceil(results.main.temp_max)} F</li>`;
    strung += `<li>Temp. Low: ${Math.ceil(results.main.temp_min)} F</li>`;
    strung += `<li>Wind Speed: ${Math.ceil(results.wind.speed)} mph</li>`;
    strung += `</ul>`;
    strung += `<p><a href="#" id="5-days-btn" class="btn btn-primary" role="button">5-Day Forecast</a></p>`;
    strung += `</div>`;
    strung += `</div>`;
    strung += `</div>`;
    strung += `</div>`;

  } else {
    console.error('5 day', results);
    results.list.forEach((result, i) => {
      const time = moment(result.dt_txt);
      if (time.hour() === 12) {
        strung += `<div class="row">`;
        strung += `<div class="col-sm-6 col-md-6">`;
        strung += `<div class="thumbnail">`;
        strung += `<h1 align="center">${time.format('<b>dddd</b> </br> MMMM Do, YYYY')}</h1>`;
        strung += `<div class="caption">`;
        strung += `<p align="center">Average Temperature: <b>${Math.ceil(result.main.temp)} F</p>`;
        strung += `<p><strong>Conditions:</strong> ${result.weather[0].description} <img src"http://openweathermap.org/img/w/${result.weather[0].icon}.png"> </p>`;
        strung += `<ul type="circle">`;
        strung += `<li>Humidity: ${result.main.humidity}%</li>`;
        strung += `<li>Barometric Pressure: ${result.main.pressure} hPa</li>`;
        strung += `<li>Temp. High: ${Math.ceil(result.main.temp_max)} F</li>`;
        strung += `<li>Temp. Low: ${Math.ceil(result.main.temp_min)} F</li>`;
        strung += `<li>Wind Speed: ${Math.ceil(result.wind.speed)} mph</li>`;
        strung += `</ul>`;
        strung += `<p><a href="#" class="btn btn-primary" role="button">5-Day Forecast</a></p>`;
        strung += `</div>`;
        strung += `</div>`;
        strung += `</div>`;
        strung += `</div>`;
      };
    });

  };
  printOneDayToDom(strung);
};

// const damString = (results, day) => {
//   let string = '';
//   if (day === 5) {
//     results.forEach((result) => {
//     string += `<div class="row">`;
//     string += `<div class="col-sm-6 col-md-6">`;
//     string += `<div class="thumbnail">`;
//     string += `<h1 align="center">${moment().format('<b>dddd</b> </br> MMMM do, YYYY')}</h1>`;
//     string += `<div class="caption">`;
//     string += `<p align="center">Average Temperature: <b>${Math.ceil(result.main.temp)} F</p>`;
//     string += `<p><strong>Conditions:</strong> ${result.weather[0].description} <img src="http://openweathermap.org/img/w/${result.weather[0].icon}.png"> </p>`;
//     string += `<ul type="circle">`;
//     string += `<li>Humidity: ${result.main.humidity}%</li>`;
//     string += `<li>Barometric Pressure: ${result.main.pressure} hPa</li>`;
//     string += `<li>Temp. High: ${Math.ceil(result.main.temp_max)} F</li>`;
//     string += `<li>Temp. Low: ${Math.ceil(result.main.temp_min)} F</li>`;
//     string += `<li>Wind Speed: ${Math.ceil(result.wind.speed)} mph</li>`;
//     string += `</ul>`;
//     string += `<p><a href="#" class="btn btn-primary" role="button">5-Day Forecast</a></p>`;
//     string += `</div>`;
//     string += `</div>`;
//     string += `</div>`;
//     string += `</div>`;
//   });
//     printFiveDayToDom(string);
//   };
// };

const printOneDayToDom = (result) => {
  $('#report').html(result);
};

// const printFiveDayToDom = (result) => {
//   $('#report').html(result)
// };

module.exports = {
  domString,
  // damString,
};
