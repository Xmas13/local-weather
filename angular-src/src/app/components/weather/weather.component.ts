import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { WeatherService,  } from '../../services/weather.service';
import { Position } from '../../classes/position';
import { Weather } from '../../classes/weather';
import { Display } from '../../classes/display'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [Position, Weather, Display]
})
export class WeatherComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private position: Position,
    private weather: Weather,
    private display: Display
  ) { }


  // On page load, we run the getLocation() function. Since it is asynchronous,
  // we return it's contents as a promise. Then, we set the global variables of
  // latitude and longitude. We then run the showWeather() function.
  ngOnInit() {
    this.weatherService.getLocation()
      .then((position) => {
        this.position.latitude = position[0];
        this.position.longitude = position[1];
        this.showWeather();
      });
  }

// We run the getWeather() function first with the parameters that we set with our getLocation()
// function. We subscribe to the datastream that we get from the api call and set our classes up
// by parsing the data we get back.
showWeather() {
this.weatherService.getWeather(this.position.latitude, this.position.longitude)
  .subscribe(data => {
      this.weather.city = data.name; // Set city name
      this.weather.description = data.weather[0].description // Grab description of conditions

      // convert unix time to Local time based on Locale for sunrise and sunset
      this.weather.sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      this.weather.sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

      // Set up all weather class items by parsing the data and making conversions
      this.weather.temp_kel = data.main.temp;
      this.weather.temp_max_kel = data.main.temp_max;
      this.weather.temp_min_kel = data.main.temp_min;
      this.weather.temp_fahr = Math.floor(9 / 5 * (this.weather.temp_kel - 273) + 32);
      this.weather.temp_max_fahr = Math.floor(9 / 5 * (this.weather.temp_max_kel - 273) + 32);
      this.weather.temp_min_fahr = Math.floor(9 / 5 * (this.weather.temp_min_kel - 273) + 32);
      this.weather.temp_cel = Math.floor(this.weather.temp_kel - 273);
      this.weather.temp_max_cel = Math.floor(this.weather.temp_max_kel - 273);
      this.weather.temp_min_cel = Math.floor(this.weather.temp_min_kel - 273);

      this.weather.wind_mps = data.wind.speed;
      this.weather.wind_mph = Math.floor(data.wind.speed / .44704);
      this.setAmerican(); // Run to set initial display values
  })
}

// Sets up functions to fire off when specific button is pressed. \xB0 is hex for degrees sign
setAmerican() {
  this.display.temp = this.weather.temp_fahr + '\xB0' + 'F';
  this.display.temp_max = this.weather.temp_max_fahr + '\xB0' + 'F';
  this.display.temp_min = this.weather.temp_min_fahr + '\xB0' + 'F';
  this.display.wind = this.weather.wind_mph + 'mph';
}

setEuropean() {
  this.display.temp = this.weather.temp_cel + '\xB0' + 'C';
  this.display.temp_max = this.weather.temp_max_cel + '\xB0' + 'C';
  this.display.temp_min = this.weather.temp_min_cel + '\xB0' + 'C';
  this.display.wind = this.weather.wind_mps + 'm/s';
}

setScientist() {
  this.display.temp = this.weather.temp_kel + '\xB0' + 'K';
  this.display.temp_max = this.weather.temp_max_kel + '\xB0' + 'K';
  this.display.temp_min = this.weather.temp_min_kel + '\xB0' + 'K';
  this.display.wind = this.weather.wind_mps + 'm/s';
}

}
