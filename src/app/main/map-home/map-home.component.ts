import { Component, OnInit } from '@angular/core';
import { MapboxServService } from '../services/mapbox-serv.service';

@Component({
  selector: '.mapHOmepage',
  templateUrl: './map-home.component.html',
  styleUrls: ['./map-home.component.scss']
})
export class MapHomeComponent implements OnInit {

  constructor(private map: MapboxServService) { }

  ngOnInit(): void {
    this.map.buildMap();
  }

}
