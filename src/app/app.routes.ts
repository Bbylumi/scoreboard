import { Routes } from '@angular/router';
import { ScoreboardComponent } from './scoreboard/scoreboard.component'; // Fix spelling error: 'SocreboardComponent' to 'ScoreboardComponent'
import { AddPointsComponent } from './add-points/add-points.component';

export const routes: Routes = [
  { path: '', redirectTo: '/scoreboard', pathMatch: 'full' },
  { path: 'scoreboard', component: ScoreboardComponent }, 
  { path: 'add-points', component: AddPointsComponent },  
];
