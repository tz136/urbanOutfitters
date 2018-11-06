import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //weather api;
  private weather_api_endPoint = "http://api.openweathermap.org/data/2.5/weather";
  private api_key = "&appid=1c959f6ac6d9c3c9415b335dfdc09bfa";

  constructor(private http: HttpClient) { }

  //weather http call;
  get(api){
    return this.http.get(this.weather_api_endPoint + api + this.api_key)
  }
}
