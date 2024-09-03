import { Routes } from '@angular/router';
import { LandingPageComponent } from './informaswan-pages/common/landing-page/landing-page.component';
import { WorkoutExercisesComponent} from './informaswan-pages/athletics/workout-exercises/workout-exercises.component';

export const routes: Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path:'home' ,  component: LandingPageComponent}, 
    { path:'workout-exercises', component: WorkoutExercisesComponent}
];
