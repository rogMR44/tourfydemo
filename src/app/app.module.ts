import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VisitaTecoComponent } from './visita-teco/visita-teco.component';
import { AboutComponent } from './about/about.component';
import { Platillo1Component } from './platillo1/platillo1.component';
import { Platillo2Component } from './platillo2/platillo2.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisitaTecoComponent,
    AboutComponent,
    Platillo1Component,
    Platillo2Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
