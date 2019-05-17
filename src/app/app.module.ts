import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThisComponent } from './first.component/first.component';
import { Second } from './second.component/second.component.component';

@NgModule({
  declarations: [
    AppComponent,
    ThisComponent,
    Second.ComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
