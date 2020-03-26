import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { News } from "./news.model";

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  // Injecting the httpClient
  constructor(private http: HttpClient){}

  // Api Key
  api_key:string = "3NpviWfVe6hyYeUHhMdNhwUAenhQybsTrmIzB84N";

  // Api Url
  api_url:string = `https://api.nasa.gov/planetary/apod?api_key=${this.api_key}`;

  // Getting the data from the API
  getNews() {
    return this.http.get<News>(this.api_url);
  }

}
