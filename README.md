# local-weather

## Deployment
 You can view this site by clicking on this link [here](https://github.com/MakenHubbard/local-weather)

## Description
We assigned this assignment to create data of where our Ex tends to go so that they could be avoided. The locations are organized by what time the Ex may appear at those locations. We have to have the four times given to us to use as buttons to filter through those locations. Also, the user can search for the location by name in the search bar.

## Screenshots
![Users Page](https://raw.githubusercontent.com/MakenHubbard/local-weather/master/screenshots/localWeather.JPG)

## How To Run
1. Visit the link given in the deployment section of this project
2. Clone the project
3. Open the terminal and make a lib folder (```mkdir lib```).
4. change directory into the lib folder (```cd lib```).
5. type ```npm init``` (press enter until the options stop)
6. type ```npm install grunt grunt-contrib-watch grunt-browserify gruntify-eslint --save-dev```.
7. Before running the program you will have to be in the lib folder and type ```grunt``` to run it
8. Get an Api key from OpenWeatherMap and in the db folder insert that Api key into the ```apiKeys.example.json``` and then change the name of the file to ```apiKeys.json```
9. Open the terminal and type in ``` hs -p 4556``