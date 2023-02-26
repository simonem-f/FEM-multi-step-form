import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from '@coreui/angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
