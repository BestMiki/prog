import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZadanieComponent } from './zadanie/zadanie.component';
import { LogowanieComponent } from './logowanie/logowanie.component';

@NgModule({
  declarations: [
    AppComponent,
    LogowanieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
