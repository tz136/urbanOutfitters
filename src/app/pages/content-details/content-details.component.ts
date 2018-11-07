import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../services/common.service";
import { ActivatedRoute, Params } from "@angular/router";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
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

  closeResult: string;

  constructor(
    private common: CommonService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
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

  //open modeal
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
