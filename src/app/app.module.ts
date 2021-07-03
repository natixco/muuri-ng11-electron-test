import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Grid1Component } from './components/grid1/grid1.component';
import { Grid2Component } from './components/grid2/grid2.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, Grid1Component, Grid2Component],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
