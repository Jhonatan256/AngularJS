import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThisComponent } from './first.component/first.component';
import { SecondComponent } from './second.component/second.component.component';

@NgModule({
  declarations: [
    AppComponent,
    ThisComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
