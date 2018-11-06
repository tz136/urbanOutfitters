import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lat = null;
  lng = null;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  //get info from autocomplete;
  handleAddressChange(address) {
    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();
  }

  //go to weather details page;
  goContentDetail() {
    let url = this.lat + '/' + this.lng;
    this.router.navigate(['content-details/' + url]);
  }

}
