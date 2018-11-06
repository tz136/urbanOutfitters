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

  constructor(private common: CommonService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.lat = params['lat'];
      this.lng = params['lng'];
      this.getWeather();
    });
  }

  ngOnInit() {
  }

  getWeather() {
    this.common.getWeathers(this.lat, this.lng).subscribe((res: any) => {
      this.getWeatherDetails(res);
    });
  }

  getWeatherDetails(info: any) {
    console.log(info);
    this.description = info.weather[0].description;
    this.temperature = info.main.temp;
    this.windSpeed = info.wind.speed;
    this.humidity = info.main.humidity;
  }

}
