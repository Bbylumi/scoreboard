import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Player {
  name: string;
  points: number;
}

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  scores: Player[] = [];
  
   
  getScores(): Player[] {
    const scores = localStorage.getItem('scores');
    return scores ? JSON.parse(scores) : [];
  }

  // Updating the score that will be displayed
  updateScoreTable(): void {
    this.scores = this.getScores();
  }

 
  ngOnInit(): void {
    this.updateScoreTable(); // Update the score table when the component loads
  }
}
