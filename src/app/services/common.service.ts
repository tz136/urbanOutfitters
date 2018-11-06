import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private crud: CrudService) { }

  getWeathers(lat: any, lng: any) {
    const path = "?lat=" + lat + "&lon=" + lng;
    return this.crud.get(path);
  }
}
