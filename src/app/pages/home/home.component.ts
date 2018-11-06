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
  location = null;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  //get info from autocomplete;
  handleAddressChange(address) {
    console.log(address);
    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();
    this.location = address.formatted_address;
  }

  //go to weather details page;
  goContentDetail() {
    let url = this.lat + '/' + this.lng;
    localStorage.setItem('location', this.location);
    this.router.navigate(['content-details/' + url]);
  }

}
