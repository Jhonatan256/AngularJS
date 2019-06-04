import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ThisComponent } from './first.component/first.component';
import { SecondComponent } from './second.component/second.component.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    ThisComponent,
    SecondComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
