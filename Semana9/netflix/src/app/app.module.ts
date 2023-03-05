import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PagesComponent } from './components/pages/pages/pages.component';
import { SerieComponent } from './components/pages/serie/serie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
    SerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
