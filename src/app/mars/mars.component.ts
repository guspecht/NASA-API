import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
  } from '@angular/core';

// Importing MapsService
import { MapsService } from '../maps/maps.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})

export class MarsComponent implements OnInit {

  // where i will display the map
  @ViewChild("mapView", { static: true }) private mapViewEl: ElementRef;

  // ApiUrl
  _apiUrl = "https://api.nasa.gov/mars-wmts/catalog/Mars_Viking_MDIM21_ClrMosaic_global_232m";

  // Injecting MapsService
  constructor(private mapsService:MapsService) {}

  ngOnInit() {
    this.mapsService.loadMap(this._apiUrl, this.mapViewEl);
  }




}
