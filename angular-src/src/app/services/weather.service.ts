import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Position } from '../classes/position';
import 'rxjs/add/operator/map';

@Injectable()

export class WeatherService {

  constructor(
    private http: Http
  ) { }

  // Since navigator.geolocation.getCurrentPosition() is asynchronous,
  // we need to create a new Promise so that the getWeather() function doesn't fire before we get the lat and long of user
  getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve([position.coords.latitude, position.coords.longitude])
      });
    });
  }

  // Creates a position object from lat and long and makes a post request to our local express api. It then returns
  // the weather data it gets in JSON format
  getWeather(_latitude, _longitude) {
  const position = {
    latitude: _latitude,
    longitude: _longitude
  }
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http
    .post('/api', JSON.stringify(position),{headers: headers})
    .map(res => res.json());
}

}
