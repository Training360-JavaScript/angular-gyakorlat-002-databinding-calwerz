import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { orderByPipe } from './order-by-pipe';
import { PricingPageComponent } from './pricing-page/pricing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingPageComponent,
    orderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
