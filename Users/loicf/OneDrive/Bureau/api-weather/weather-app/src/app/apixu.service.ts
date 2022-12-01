import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location: string)
  {
    return this.http.get('http://api.weatherstack.com/current?access_key=2bd4c222e20b8163c1619c3670471bd1&query=' + location);    // 2bd4c222e20b8163c1619c3670471bd1
  }
}
