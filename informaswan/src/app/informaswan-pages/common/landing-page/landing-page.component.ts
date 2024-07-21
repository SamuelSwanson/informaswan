import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from '../header/header.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, HeaderComponent, MatGridListModule, CardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
  muscle_title = "Muscle Map";
  muscle_content = "This will help guide you in what exercises help what muscle.";
  muscle_image = "'../../../../assets/images/muscle_front_20.JPG'";
  poker_title = "How to play poker";
  poker_content = "This is a game that will show you how to play poker";
  poker_image = "'../../../../assets/images/muscle_front_20.JPG'";
  cocktail_title = "Cocktail search";
  cocktail_content = "This will will populate a list of cocktails you can make with the ingredients you have";
  cocktail_image = "'../../../../assets/images/muscle_front_20.JPG'";
  home_loan_title = "Home Loan calculators";
  home_loan_content = "This set of calculators can be used to give you an idea of what you can qualify for.";
  home_loan_image = "'../../../../assets/images/muscle_front_20.JPG'";
  home_care_title = "Retirment Care Cost Comparitors";
  home_care_content = "These comparisons show cost differences between elderly costs.";
  home_care_image = "'../../../../assets/images/muscle_front_20.JPG'";
  disc_golf_instuctional_title = "Disc Golf Form Check";
  disc_golf_instuctional_content = "This website consolidates instructional disc golf topics in one place.";
  disc_golf_instuctional_image = "'../../../../assets/images/muscle_front_20.JPG'";
  
  doSomething(){
    console.log("doing it")
  }
}
