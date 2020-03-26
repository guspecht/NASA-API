import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

import { News } from './news.model';
import { async } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News;
  videoUrl;

  constructor(private newsService: NewsService, private sanitizer: DomSanitizer) { }

  ngOnInit(){

    // Returns the data form the API
    return this.newsService.getNews()
      .subscribe((dataApi)=> {
          this.news = dataApi;
          // making the URL be a TrustResouceUrl
          this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.news.url);
      });

  }

  ngOnChanges(){
    console.log(this.news.url)
  }



}
