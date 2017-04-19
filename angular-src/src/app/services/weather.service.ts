import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Position } from '../classes/position';
import 'rxjs/add/operator/map';

@Injectable()

export class WeatherService {

  constructor(
    private http: Http
  ) { }

  getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve([position.coords.latitude, position.coords.longitude])
      });

    });
  }

  getWeather(_latitude, _longitude) {
  const position = {
    latitude: _latitude,
    longitude: _longitude
  }
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http
    .post('http://localhost:8080/api', JSON.stringify(position),{headers: headers})
    .map(res => res.json());
}

}
