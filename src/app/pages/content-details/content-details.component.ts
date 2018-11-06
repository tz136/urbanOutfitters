import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../services/common.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {

  lat = null;
  lng = null;

  iconUrl = null;
  description = null;
  temperature = null;
  windSpeed = null;
  humidity = null;

  location = null;

  loading = true;

  constructor(private common: CommonService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.lat = params['lat'];
      this.lng = params['lng'];
      this.location = localStorage.getItem('location');
      this.getWeather();
    });
  }

  ngOnInit() {
  }

  //call get weather api
  getWeather() {
    this.common.getWeathers(this.lat, this.lng).subscribe((res: any) => {
      this.getWeatherDetails(res);
      this.loading = false;
    }, err => {
      this.common.handlerError();
    });
  }

  //get weather details
  getWeatherDetails(info: any) {
    console.log(info);
    this.description = info.weather[0].description;
    this.temperature = info.main.temp;
    this.windSpeed = info.wind.speed;
    this.humidity = info.main.humidity;
  }

}
