import { Component, OnInit } from '@angular/core';
import { MapboxServService } from '../services/mapbox-serv.service';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
@Component({
  selector: '.mapHOmepage',
  templateUrl: './map-home.component.html',
  styleUrls: ['./map-home.component.scss']
})
export class MapHomeComponent implements OnInit {

  constructor(private map: MapboxServService) { }
  addressselected!: string;
  countryselected!: string;

  countries: string[] = [
    'USA',
    'India'
  ];

  address: string[] = [
   '1222 Harrison St Mingus, Texas 76463, United States',
   '1222 Harrison St San Francisco, California 94103, United States'
  ];
  ngOnInit(): void {
    this.map.buildMap();
  }

}
