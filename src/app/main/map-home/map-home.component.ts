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
  selectdrop: any= "Country";
  mx:any = "India";
  
  address: string[] = [
   '1222 Harrison St Mingus, Texas 76463, United States',
   '1222 Harrison St San Francisco, California 94103, United States'
  ];

  countries = [
    {countryID:"1", countryName: "India"},
    {countryID:"2", countryName: "United States"},
    {countryID:"13", countryName: "South Africa"},
    {countryID:"333", countryName: "Pakistan"},
    {countryID:"232", countryName: "China"}
  ];


  ngOnInit(): void {
    this.map.buildMap();
  }

  getValue = (item : string) =>{
    console.log(item);
    this.selectdrop = item;
}

}
