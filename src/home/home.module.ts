import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeChild1Component } from './components/home-child1/home-child1.component';
import { HomeChild2Component } from './components/home-child2/home-child2.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeChild1Component,
    HomeChild2Component,
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule
  ],
  exports:[HomeChild1Component],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
