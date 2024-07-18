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
  muscle_title = "Muscle Map"
  muscle_content = "This will help guide you in what exercises help what muscle."
  muscle_image = "'../../../../assets/images/muscle_front_20.JPG'"
  doSomething(){
    console.log("doing it")
  }
}
