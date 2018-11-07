import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../services/common.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
@Component({
  selector: "app-content-details",
  templateUrl: "./content-details.component.html",
  styleUrls: ["./content-details.component.scss"]
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

  constructor(
    private common: CommonService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.lat = params["lat"];
      this.lng = params["lng"];
      this.location = localStorage.getItem("location");
      this.getWeather();
    });
  }

  ngOnInit() {}

  //call get weather api
  getWeather() {
    this.common.getWeathers(this.lat, this.lng).subscribe(
      (res: any) => {
        this.getWeatherDetails(res);
        this.getIcon(res);
        this.loading = false;
      },
      err => {
        this.common.handlerError();
      }
    );
  }
  //get weather icon
  getIcon(info: any) {
    this.iconUrl = "/assets/icon/" + info.weather[0].icon + ".png";
  }
  //get weather details
  getWeatherDetails(info: any) {
    console.log(info);
    this.description = info.weather[0].description;
    this.temperature = (((info.main.temp - 273.15) * 9) / 5 + 32).toFixed(0);
    this.windSpeed = info.wind.speed;
    this.humidity = info.main.humidity;
    this.iconUrl = "/assets/icon/" + info.weather[0].icon + ".png";
  }
}
