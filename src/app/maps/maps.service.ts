import {
  Injectable,
   ElementRef,
   OnDestroy
   } from '@angular/core';

// install npm install --save esri-loader
import { loadModules } from "esri-loader";

// Install npm install @types/arcgis-js-api
// tsconfig.app.json add "types": ["arcgis-js-api"].
import esri = __esri; // Esri TypeScript Types

@Injectable({
  providedIn: 'root'
})

export class MapsService implements OnDestroy{

    /**
   * _loaded provides map loaded status
   */

  private _loaded = false;
  private _view: esri.MapView = null;

  get mapLoaded(): boolean {
    return this._loaded;
  }


  constructor(){}


  async initializeMap(apiUrl:string, mapDivEl:ElementRef) {
    try {

      // Load the modules for the ArcGIS API for JavaScript
      const [EsriMap, EsriMapView, esriWMTSLayer, esriConfig] = await loadModules([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/WMTSLayer",
        "esri/config"
      ]);


      //config proxy
      esriConfig.request.proxyUrl = "https://api.nasa.gov";

      //config trusted servers
      esriConfig.request.trustedServers.push("https://web.lmmp.nasa.gov");

      // Get The layer
      const overlayLayer = new esriWMTSLayer(apiUrl, { serviceMode: "RESTful" });

      // Configure the Map
      const mapProperties: esri.MapProperties = {
        layers: [overlayLayer]
      };

      // Create the Map
      const map: esri.Map = new EsriMap(mapProperties);


      // Initialize the MapView
      const mapViewProperties: esri.MapViewProperties = {
        container: mapDivEl.nativeElement,
        map: map
      };

      this._view = new EsriMapView(mapViewProperties);
      await this._view.when();
      return this._view;


    } catch (error) {
      console.log("EsriLoader: ", error);
    }
  }


  loadMap(apiUrl:string, mapDivEl:ElementRef) {

      // Initialize MapView and return an instance of MapView
      this.initializeMap(apiUrl,mapDivEl).then(mapView => {

      // The map has been initialized
      console.log("mapView ready: ", this._view.ready);
      this._loaded = this._view.ready;

      // Making the attribution clear to Read in a black background.
      let t = <HTMLElement>document.querySelector(".esri-attribution");
      t.style.background = "transparent"
      t.style.color = "white";
    });

  }

  ngOnDestroy() {
    if (this._view) {
      // destroy the map view
      this._view.container = null;
    }
  }

}
