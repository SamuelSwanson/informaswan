import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLoanCalculatorsComponent } from './informaswan-pages/home-buying/home-loan-calculators/home-loan-calculators.component';
import { LandingPageComponent } from './informaswan-pages/common/landing-page/landing-page.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [HomeLoanCalculatorsComponent, LandingPageComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
