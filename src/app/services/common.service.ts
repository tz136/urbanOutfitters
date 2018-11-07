import { Injectable } from "@angular/core";
import { CrudService } from "./crud.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private crud: CrudService, private router: Router) {}

  //get weather details;
  getWeathers(lat: any, lng: any) {
    const path = "?lat=" + lat + "&lon=" + lng;
    return this.crud.get(path);
  }
  //if api call cause error, will call this function to 404 page;
  handlerError() {
    this.router.navigate(["**"]);
  }
}
