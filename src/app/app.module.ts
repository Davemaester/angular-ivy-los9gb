import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { routes } from './app.routing';
import { ApiService } from 'src/service/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, routes],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
