import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { WeatherService,  } from '../../services/weather.service';
import { Position } from '../../classes/position';
import { Weather } from '../../classes/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [Position, Weather]
})
export class WeatherComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private position: Position,
    private weather: Weather
  ) { }



  ngOnInit() {
    this.weatherService.getLocation()
      .then((position) => {
        this.position.latitude = position[0];
        this.position.longitude = position[1];
        this.showWeather();
      });
  }

showWeather() {
this.weatherService.getWeather(this.position.latitude, this.position.longitude)
  .subscribe(data => {
      this.weather.city = data.name;
      this.weather.description = data.weather[0].description + " and " + data.weather[1].description
      this.weather.sunrise = data.sys.sunrise;
      this.weather.sunset = data.sys.sunset;
      this.weather.temp = data.main.temp;
      this.weather.temp_max = data.main.temp_max;
      this.weather.temp_min = data.main.temp_min;
      this.weather.wind = data.wind.speed;
  })
}


}
