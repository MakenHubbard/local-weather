const moment = require('../lib/node_modules/moment');

const domString = (results, day) => {
  let strung = '';
  if (day === 1) {
    strung += `<div class="row forecasts">`;
    strung += `<div class="col-sm-6 col-md-6">`;
    strung += `<div class="thumbnail">`;
    strung += `<h1 align="center" class="date" data-date="${results.dt_txt}">${moment().format('<b>dddd</b> </br> MMMM Do, YYYY')}</h1>`;
    strung += `<div class="caption">`;
    strung += `<p align="center" class="temp" data-temp="${Math.ceil(results.main.temp)}">Average Temperature: <b>${Math.ceil(results.main.temp)} F</p>`;
    strung += `<p class="condition" data-condition="${results.weather[0].description}"><strong>Conditions:</strong> ${results.weather[0].description} <img class="condImage" data-condImage="${results.weather[0].icon}"src="http://openweathermap.org/img/w/${results.weather[0].icon}.png"> </p>`;
    strung += `<ul type="circle">`;
    strung += `<li class="humid data-humid="${results.main.humidity}">Humidity: ${results.main.humidity}%</li>`;
    strung += `<liclass="bp" data-bp="${results.main.pressure}">Barometric Pressure: ${results.main.pressure} hPa</li>`;
    strung += `<li>Temp. High: ${Math.ceil(results.main.temp_max)} F</li>`;
    strung += `<li>Temp. Low: ${Math.ceil(results.main.temp_min)} F</li>`;
    strung += `<li class="blowPower" data-blowPower="${Math.ceil(results.wind.speed)}">Wind Speed: ${Math.ceil(results.wind.speed)} mph</li>`;
    strung += `</ul>`;
    strung += `<p><a href="#" id="5-days-btn" class="btn btn-primary" role="button">5-Day Forecast</a></p>`;
    strung += `<a href="#" id="saveLink" class="saveTo">Add to favy's</a>`;
    strung += `</br>`;
    strung += `<a href="#" id="viewSavedBtn" class="btn btn-info" role="button">View your days</a>`;
    strung += `</div>`;
    strung += `</div>`;
    strung += `</div>`;
    strung += `</div>`;

  } else {
    console.error('5 day', results);
    results.list.forEach((result, i) => {
      const time = moment(result.dt_txt);
      if (time.hour() === 12) {
        strung += `<div class="row forecasts">`;
        strung += `<div class="col-sm-6 col-md-6">`;
        strung += `<div class="thumbnail">`;
        strung += `<h1 align="center" class="date" data-date="${result.dt_txt}">${time.format('<b>dddd</b> </br> MMMM Do, YYYY')}</h1>`;
        strung += `<div class="caption">`;
        strung += `<p align="center" class="temp" data-temp="${Math.ceil(result.main.temp)}">Average Temperature: <b>${Math.ceil(result.main.temp)} F</p>`;
        strung += `<p class="condition" data-condition="${result.weather[0].description}"><strong>Conditions:</strong> ${result.weather[0].description} <img class="condImage" data-condImage="${result.weather[0].icon}" src"http://openweathermap.org/img/w/${result.weather[0].icon}.png"> </p>`;
        strung += `<ul type="circle">`;
        strung += `<li class="humid" data-humid="${result.main.humidity}">Humidity: ${result.main.humidity}%</li>`;
        strung += `<li class="bp" data-bp="${result.main.pressure}">Barometric Pressure: ${result.main.pressure} hPa</li>`;
        strung += `<li>Temp. High: ${Math.ceil(result.main.temp_max)} F</li>`;
        strung += `<li>Temp. Low: ${Math.ceil(result.main.temp_min)} F</li>`;
        strung += `<li class="blowPower" data-blowPower="${Math.ceil(result.wind.speed)}">Wind Speed: ${Math.ceil(result.wind.speed)} mph</li>`;
        strung += `</ul>`;
        strung += `<p><a href="#" class="btn btn-primary" role="button">5-Day Forecast</a></p>`;
        strung += `<a href="#" id="saveLink" class="saveTo">Add to favy's</a>`;
        strung += `</br>`;
        strung += `<a href="#" id="viewSavedBtn" class="btn btn-info" role="button">View your days</a>`;
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
