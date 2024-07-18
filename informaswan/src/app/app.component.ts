import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeLoanCalculatorsComponent } from './informaswan-pages/home-buying/home-loan-calculators/home-loan-calculators.component';
import { LandingPageComponent } from './informaswan-pages/common/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HomeLoanCalculatorsComponent, LandingPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'informaswan';
}
