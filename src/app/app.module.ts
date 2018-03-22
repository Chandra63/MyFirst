import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { RouletteComponent } from './roulette/roulette.component';


@NgModule({
  declarations: 
  [
    AppComponent,
    TestComponent,
    RouletteComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
