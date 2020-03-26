import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  } from '@angular/core';

// Importing MapsService
import { MapsService } from '../maps/maps.service';

@Component({
  selector: 'app-vesta',
  templateUrl: './vesta.component.html',
  styleUrls: ['./vesta.component.css']
})

export class VestaComponent implements OnInit {

  // where i will display the map
  @ViewChild("mapView", { static: true }) private mapViewEl: ElementRef;

  // ApiUrl
  _apiUrl = "https://api.nasa.gov/vesta-wmts/catalog/Vesta_Dawn_Geology_Global_32ppd_IAU";

  // Injecting the MapsService
  constructor(private mapsService:MapsService) {}

  ngOnInit() {
    this.mapsService.loadMap(this._apiUrl, this.mapViewEl);
  }



}
