import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  } from '@angular/core';

// Importing MapsService
import { MapsService } from '../maps/maps.service';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.css']
})


export class MoonComponent implements OnInit {

  // where i will display the map
  @ViewChild("mapView", { static: true }) private mapViewEl: ElementRef;

  // ApiUrl
  _apiUrl = "https://trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02";

  // Injecting MapsService
  constructor(private mapsService:MapsService) {}

  ngOnInit() {
    this.mapsService.loadMap(this._apiUrl, this.mapViewEl);
  }

}
