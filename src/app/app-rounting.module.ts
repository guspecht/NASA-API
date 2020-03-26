import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';

import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { NewsComponent } from './news/news.component';
import { MarsComponent } from './mars/mars.component';
import { MoonComponent } from './moon/moon.component';
import { VestaComponent } from './vesta/vesta.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'explore', component: ExploreComponent},
  { path: 'maps', component: MapsComponent},
  { path: 'maps/mars', component: MarsComponent},
  { path: 'maps/moon', component: MoonComponent},
  { path: 'maps/vesta', component: VestaComponent},
  { path: 'news', component: NewsComponent},
  { path: '**', component: HomeComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRountingModule{


}
