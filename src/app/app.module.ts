import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news/news.service';
import { ExploreComponent } from './explore/explore.component';
import { MapsComponent } from './maps/maps.component';
import { FooterComponent } from './footer/footer.component';
import { AppRountingModule } from './app-rounting.module';
import { MarsComponent } from './mars/mars.component';
import { MoonComponent } from './moon/moon.component';
import { VestaComponent } from './vesta/vesta.component';
import { MapsService } from './maps/maps.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    ExploreComponent,
    MapsComponent,
    FooterComponent,
    MarsComponent,
    MoonComponent,
    VestaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRountingModule
  ],
  providers: [NewsService, MapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
