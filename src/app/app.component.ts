import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScoreboardComponent } from "./scoreboard/scoreboard.component";
import { AddPointsComponent } from "./add-points/add-points.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScoreboardComponent, AddPointsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scoreboard';
}
